import React from 'react';
import {hashHistory} from 'react-router';
import Loading from 'react-loading';

export default class Index extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isSend : false,
			isSend2 : false,
			count : 60,
			error : ""
		}
	}

	componentWillMount() {
		
	}
	
	showError(msg) {
		this.setState({
			error : msg
		});
	}
	
	sendVCode() {
		let mobile = this.refs.mobile.value;
		let mobileReg = !!mobile.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
		if(!mobileReg) {
			this.showError("请输入正确的手机号码！");
		} else {
			let apiUrl = "/activity/sendVCode?mobile=" + mobile; 
			$.post(apiUrl, ret => {
				if(ret.code == 0) {
					this.setState({
						isSend : true
					});
					this.countTime();
					alert("验证码已发送至你的手机，请注意查收");
				} else {
					this.showError(ret.msg);
				}
			});
		}
	}
	
	checkInput() {
		this.setState({
			error : ""
		})	
	}
	
	countTime() {
		this.interval = setInterval(() => {
			if(this.state.count == 0) {
				this.setState({
					count : 60,
					isSend : false
				});
				clearInterval(this.interval);
			} else {
				this.setState({ count : this.state.count - 1})
			}
		}, 1000);
	}
	
	handleSubmit() {
		if(this.state.isSend2) {
			return;
		}
		let vcode = this.refs.vcode.value;
		let mobile = this.refs.mobile.value;
		let mobileReg = !!mobile.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
		if(!mobileReg) {
			this.showError("请输入正确的手机号码！");
			return;
		}
		if(vcode) {
			this.setState({
				isSend2 : true
			});
			let apiUrl = "/activity/inbodydata?mobile=" + mobile + "&vcode=" + vcode;
			$.post(apiUrl, ret => {
				this.setState({
					isSend2 : false
				});
				if(ret.code == 0) {
					hashHistory.push('/table/'+ mobile + '/' + vcode);
				} else {
					this.showError(ret.msg);
				}
			});
		} else {
			this.showError("验证码错误！");
		}
	}
	
	render() {
		return (
			<div className="m-container">
				<div className="page-form">
					<div className="form-hd">
						<h1>HI运动体侧查询</h1>
						{(() => {
							if(this.state.error) {
								return <p><i/>{this.state.error}</p>
							}
						})()}
					</div>
					<div className="form-bd">
						<div className="form-row">
							<i className="icon-phone"></i>
							<input type="tel" name="mobile" ref="mobile" placeholder="Hi,请输入手机号" disabled={this.state.isSend ? "disabled" : ""} onInput={this.checkInput.bind(this)}/>
						</div>
						<div className="form-row">
							<i className="icon-code"></i>
							<input type="tel" name="vcode" ref="vcode" placeholder="请输入手机验证码" maxLength="12" onInput={this.checkInput.bind(this)}/>
							{(() => {
								if(!this.state.isSend) {
									return <span onClick={this.sendVCode.bind(this)}>获取验证码</span>
								} else {
									return <span>{this.state.count}秒</span>	
								}
							})()}
						</div>
					</div>
					<div className="form-ft">
						{(() => {
							if(!this.state.isSend2) {
								return <span className="btn-check" onClick={this.handleSubmit.bind(this)}>查看测试报告</span>
							} else {
								return <span className="btn-check"><Loading type='bubbles' color='#6173D4' /></span>	
							}
						})()}
					</div>
				</div>
			</div>
		);
	}
}
