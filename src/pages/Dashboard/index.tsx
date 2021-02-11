import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { PageTitle, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/Logo.svg';

import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    // use State to track user input
    const [newRepo, setNewRepo] = useState('');
    // input error handling
    const [inputError, setInputError] = useState('');
    // track the repos on the page
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        // get from local storage
        const storagedRepositories = localStorage.getItem(
            '@GithubExplorer: repositories',
        );
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];
    });

    // Saving in local storage
    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer: repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    const handleAddRepository = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        try {
            // consume github api
            const res = await api.get<Repository>(`repos/${newRepo}`);
            console.log(res.data);

            // save new repo in state
            const repository = res.data;

            setRepositories([...repositories, repository]);

            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Error na busca por esse repositório');
        }
    };

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <PageTitle>Explore repositórios no Github</PageTitle>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repository) => (
                    // this Link replaces the a tag, and "to" replaces href
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};
export default Dashboard;
