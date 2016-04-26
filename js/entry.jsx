import React from 'react';
import { render } from 'react-dom';
import {Route, Router, hashHistory, DefaultRoute, run} from 'react-router';
//import auth from './common/auth'

import Index from './index';
// import Article from 'bundle?lazy!./article';
import Article from './article/detail';
import NotFound from './404';

let root = render((
    <Router  history={hashHistory} >
        <Route path="/"  component={Index} />  
        <Route path="article/:articleId" component={Article} />
        <Route path="*" component={NotFound} />
    </Router>
  
), document.getElementById('app'));

