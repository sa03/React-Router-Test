import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Config } from './config';

import "./sass/global.scss";


const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        // component: require('./components/App'),
        childRoutes: [
            require('./routes/Report'),
            require('./routes/Table')
        ]
    }]
}

render(
    <Router history={hashHistory} routes={rootRoute} />,
    document.getElementById('App')
);

// let root = render((
//     <Router history={hashHistory}>
//         <Route path="/" component={Index} />
//         <Route path="/table/:mobile/:vcode" component={Table} />
//     </Router>
// ), document.getElementById('App'));
