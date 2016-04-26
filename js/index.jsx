import React from 'react';
import {Link} from 'react-router';
import Head from './common/head';
import Foot from './common/foot';

export default class Index extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	
	componentWillMount() {
		
	}
	
	render() {
		return (
			<div>
				<Head />
				<div className="o-hiyd-main">
					<div className="d-slider-initImg">
						<img src="/img/temp2.png" />
					</div>
					<div className="index-newslist">
						<div className="m-newlist">
							<ul>
								<li>
									<Link to="/article/4">
										<span className="avatar">
											<img src="http://image.yy.com/ojiastoreimage/6db3c581d951a909539a92f2883f2166.jpg" alt="减肥过程中怎么吃？如何控制饮食" />
										</span>
										<div className="cont">
											<p>减肥过程中怎么吃？如何控制饮食</p>
										</div>
									</Link>
								</li>
								<li>
									<Link to="/article/20">
										<span className="avatar">
											<img src="http://image.yy.com/ojiastoreimage/6db3c581d951a909539a92f2883f2166.jpg" alt="减肥过程中怎么吃？如何控制饮食" />
										</span>
										<div className="cont">
											<p>减肥过程中怎么吃？如何控制饮食</p>
										</div>
									</Link>
								</li>
							</ul>
							<div className="m-newlist-more" data-page="1">
								<p>加载更多</p>
							</div>
						</div>
					</div>
				</div>
				<Foot />
				{this.props.children}
			</div>
		);
	}
}
