import React from 'react';
import {browserHistory, Link} from 'react-router';
import Index from './Index'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				{this.props.children || <Index />}
			</div>
		);
	}
}
