import React from 'react';
import {Link} from 'react-router';
import Head from './../common/head';
import Foot from './../common/foot';

let data = {
	article : {
		"4" : {
			title : '简单做HIIT05 腿、手、腹部细节强化',
			pub_date : '2016-04-25',
			author : 'hi运动老王',
			content : '<p>今天这种HIIT动作的三个动作，简单的就上中下三个部位，针对腿、手臂和腹肌来做，强化细节的动作，来甩掉脂肪，增加肌肉。</p><p><img src="http://image.yy.com/ojiastoreimage/b54d4899d9313f7b859674acdc895890.jpg" alt="简单做HIIT 男女通用超速减脂大法 - 图片2"/></p>'
		},
		"20" : {
			title : '简单做HIIT05 腿',
			pub_date : '2016-04-21',
			author : 'hi运动老王',
			content : '<p>今天这种HIIT动作的三个动作，简单的就上中下三个部位，针对腿、手臂和腹肌来做，强化细节的动作，来甩掉脂肪，增加肌肉。</p>'
		}
	},
	hot : [{
		url : 'http://m.hiyd.com/jianshengyinshi/528',
		cover : 'http://image.yy.com/ojiastoreimage/e199c4178c06f3a89cacd301bd4e58e8.jpg',
		title : '教你如何控制体重 一周减重5斤'
	}, {
		url : 'http://m.hiyd.com/jianfei/501',
		cover : 'http://image.yy.com/ojiastoreimage/c68f91b9e27e90f6765de6a8c42b6215.jpg',
		title : '高效减肥法 跑步后再做HIIT燃脂'
	}, {
		url : 'http://m.hiyd.com/jianshengyinshi/528',
		cover : 'http://image.yy.com/ojiastoreimage/e199c4178c06f3a89cacd301bd4e58e8.jpg',
		title : '教你如何控制体重 一周减重5斤'
	}, {
		url : 'http://m.hiyd.com/jianfei/501',
		cover : 'http://image.yy.com/ojiastoreimage/c68f91b9e27e90f6765de6a8c42b6215.jpg',
		title : '高效减肥法 跑步后再做HIIT燃脂'
	}]
}

console.log(data);


export default class Article extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			article: {},
			hot: []
		};
	}
	
	componentData(id) {
		this.setState({
			article : data.article[id],
			hot : data.hot
		});
	}
	
	componentWillMount() {
		let articleId = this.props.params.articleId;
		this.componentData(articleId);
	}
	
	render() {
		return (
			<div>
				<Head/>
				<div className="o-hiyd-main nopadding">
					<div className="o-hiyd-detail">
						<div className="article">
							<h1>{this.state.article.title}</h1>
							<div className="article-meta">
								<div className="left">
									<span className="time">{this.state.article.pub_date}</span>
									<span className="name">{this.state.article.author}</span>
								</div>
								<div className="right">
									<span className="share">我要分享</span>
								</div>
							</div>
							<div className="article-text" dangerouslySetInnerHTML={{__html: this.state.article.content}}></div>
						</div>
					</div>
					<div className="m-hotvideo">
						<div className="hd">
							<h3>热门资讯</h3>
						</div>
						<div className="bd">
							<div className="m-newlist">
								<ul>
								{
									this.state.hot.map(item => {
										return (
											<li>
												<Link to="/">
													<span className="avatar"><img src={item.cover} alt={item.title} /></span>
													<div className="cont"><p>{item.title}</p></div>
												</Link>
											</li>
										)
									})
								}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Foot/>
			</div>
		)
	}
}