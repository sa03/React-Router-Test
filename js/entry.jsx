import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Index from './index';
import Table from './table';

require("../sass/global.scss");

let root = render((
    <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/table/:mobile/:vcode" component={Table} />
    </Router>
), document.getElementById('App'));

