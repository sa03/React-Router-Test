import React from 'react';
import {browserHistory, Link} from 'react-router';
import Report from './Report'

export default class Index extends React.Component {
	render() {
		return (
			<div className="m-container">
				{this.props.children || <Report />}
			</div>
		);
	}
}
