import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Config } from './config';

import "./sass/global.scss";


const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/Index'),
        childRoutes: [
            require('./routes/Table')
        ]
    }]
}

render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('App')
);

// let root = render((
//     <Router history={browserHistory}>
//         <Route path="/" component={Index} />
//         <Route path="/table/:mobile/:vcode" component={Table} />
//     </Router>
// ), document.getElementById('App'));
