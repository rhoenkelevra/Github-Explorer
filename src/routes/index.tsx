import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        // the /:repo+ means that I want to finde everything after the /
        <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
);

export default Routes;
