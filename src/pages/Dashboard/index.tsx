import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { PageTitle, Form, Repositories } from './styles';
import logoImg from '../../assets/Logo.svg';

const Dashboard: React.FC = () => (
    <>
        <img src={logoImg} alt="Github Explorer" />
        <PageTitle>Explore repositórios no Github</PageTitle>
        <Form>
            <input placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="#">
                <img // giving indentation error
                    /* eslint-disable */ src="https://avatars.githubusercontent.com/u/36143435?s=460&v=4"
                    /* eslint-disable */
                    alt="Rene Rhoen"
                />
                <div>
                    <strong>rhoenkelevra/repo</strong>
                    <p>This is some repo</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="#">
                <img // giving indentation error
                    /* eslint-disable */ src="https://avatars.githubusercontent.com/u/36143435?s=460&v=4"
                    /* eslint-disable */
                    alt="Rene Rhoen"
                />
                <div>
                    <strong>rhoenkelevra/repo</strong>
                    <p>This is some repo</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="#">
                <img // giving indentation error
                    /* eslint-disable */ src="https://avatars.githubusercontent.com/u/36143435?s=460&v=4"
                    /* eslint-disable */
                    alt="Rene Rhoen"
                />
                <div>
                    <strong>rhoenkelevra/repo</strong>
                    <p>This is some repo</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
);

export default Dashboard;
