import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProductList from './pages/products/products_list';
import ClientList from './pages/clients/clients_list';
import ProductNew from './pages/products/products_new';
import ClientNew from './pages/clients/clients_new';
import Main from './pages/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Main} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/clients" component={ClientList} />
            <Route exact path="/products/new" component={ProductNew} />
            <Route exact path="/clients/new" component={ClientNew} />
        </Switch>
    </BrowserRouter>
);

export default Routes;