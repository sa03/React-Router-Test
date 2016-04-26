import React from 'react';
import {Link} from 'react-router';
import Head from './common/head';
import Foot from './common/foot';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<div className="o-article page">
					<div className="o-article-wrap">
					<div className="o-404-page">
						<i />
					</div>
					</div>
				</div>
				<Foot />
			</div>
		);
	}
}
