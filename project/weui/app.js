import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import "./css/weui.css";
import "./css/example.css";


const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Cell'),
            require('./routes/Button'),
            require('./routes/Toast')
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
