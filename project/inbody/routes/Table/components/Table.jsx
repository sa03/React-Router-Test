import React from 'react';
import $ from 'jquery';

export default class Table extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			data : {}
		}
	}
	
	componentDidMount() {
		this._updateState();
    }
	
	getScoreP(score) {
		let percent = score / 100;
		let rotate = {
			left : 0,
			right : 0
		}
		
		if(percent < 0.5) {
			rotate.right = percent * 360;
			rotate.left = -360;
		} else {
			rotate.right = 180;
			rotate.left = -360 + percent * 360 - 180;
		}
		
		return rotate;
	}
	
	_updateState() {
		let apiUrl = `${Config.apiUrl}/activity/InbodyData`;
		let postData = {
			mobile : this.props.routeParams.mobile,
			vcode : this.props.routeParams.vcode
		}
		
		$.post(apiUrl, postData, (ret)=>{
			if(ret.code == 0) {
				this.setState({data: ret.data});
			} else {
				alert(ret.msg);
			}
		});
	}
	
	calRange(value, min, max) {
		if(value < min) {
			return 1;
		} else if(value > max) {
			return 3;
		} else {
			return 2;
		}
	}
	
	calPercent(value, normal, min, max) {
			
	}
	
	render() {
		var data = this.state.data;
		return (
			<div className="page-table">
				<div className="table-title"></div>
				<section>
					<div className="sec-hd">
						<h3>个人信息</h3>
					</div>
					<div className="sec-bd">
						<table className="sec-table">
							<tbody>
								<tr>
									<th>姓名</th>
									<th>身高</th>
									<th>年龄</th>
									<th>性别</th>
									<th>测试日期/时间</th>
								</tr>
								<tr>
									<td style={{width: "20%"}}>{data.name ? data.name : ""}</td>
									<td style={{width: "15%"}}>{data.height ? `${data.height}cm` : ""}</td>
									<td style={{width: "10%"}}>{data.age ? `${data.age.toFixed(0)}岁` : ""}</td>
									<td style={{width: "10%"}}>{data.gender ? data.gender == "F" ? "女" : "男" : ""}</td>
									<td style={{width: "25%"}}>{data.test_date}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
				<section>
					<div className="sec-hd">
						<h3>人体成分分析</h3>
					</div>
					<div className="sec-bd">
						<table className="sec-table">
							<tbody>
								<tr>
									<th>人体项指数</th>
									<th>您的数值</th>
									<th>正常范围</th>
								</tr>
								<tr>
									<td>身体总水分(L)</td>
									<td>
										<em className={"tp-" + this.calRange(data.tbw, data.ll_tbw, data.ul_tbw)}>{data.tbw}</em>
									</td>
									<td>({data.ll_tbw} ~ {data.ul_tbw})</td>
								</tr>
								<tr>
									<td>蛋白质(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.protein, data.ll_protein, data.ul_protein)}>{data.protein}</em>
									</td>
									<td>({data.ll_protein} ~ {data.ul_protein})</td>
								</tr>
								<tr>
									<td>无机盐(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.minerals, data.ll_minerals, data.ul_minerals)}>{data.minerals}</em>
									</td>
									<td>({data.ll_minerals} ~ {data.ul_minerals})</td>
								</tr>
								<tr>
									<td>体脂肪(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.bfm, data.ll_bfm, data.ul_bfm)}>{data.bfm}</em>
									</td>
									<td>({data.ll_bfm} ~ {data.ul_bfm})</td>
								</tr>
								<tr>
									<td>体重(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.weight, data.ll_weight, data.ul_weight)}>{data.weight}</em>
									</td>
									<td>({data.ll_weight} ~ {data.ul_weight})</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
				<section>
					<div className="sec-hd">
						<h3>肌肉脂肪分析</h3>
					</div>
					<div className="sec-bd">
						<table className="sec-table">
							<tbody>
								<tr>
									<th>人体项指数</th>
									<th>您的数值</th>
									<th>正常范围</th>
								</tr>
								<tr>
									<td>体重(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.weight, data.ll_weight, data.ul_weight)}>{data.weight}</em>
									</td>
									<td>({data.ll_weight} ~ {data.ul_weight})</td>
								</tr>
								<tr>
									<td>骨骼肌(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.smm, data.ll_smm, data.ul_smm)}>{data.smm}</em>
									</td>
									<td>({data.ll_smm} ~ {data.ul_smm})</td>
								</tr>
								<tr>
									<td>体脂肪(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.bfm, data.ll_bfm, data.ul_bfm)}>{data.bfm}</em>
									</td>
									<td>({data.ll_bfm} ~ {data.ul_bfm})</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
				<section>
					<div className="sec-hd">
						<h3>肥胖分析</h3>
					</div>
					<div className="sec-bd">
						<table className="sec-table">
							<tbody>
								<tr>
									<th>人体项指数</th>
									<th>您的数值</th>
									<th>正常范围</th>
								</tr>
								<tr>
									<td>身体质量指数(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.bmi, 18.5, 24)}>{data.bmi}</em>
									</td>
									<td>(18.5 ~ 24.0)</td>
								</tr>
								<tr>
									<td>体脂百分比(kg)</td>
									<td>
										<em className={"tp-" + this.calRange(data.bfm / data.weight * 100, 10, 20)}>{(data.bfm / data.weight * 100).toFixed(1)}</em>
									</td>
									<td>(10% ~ 20%)</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
				<section className="no-padding">
					<div className="sec-hd">
						<h3>肌肉均衡</h3>
					</div>
					<div className="sec-bd">
						<div className="mod-body">
							<div className="left-top">
								<p>{data.ffm_l_arm + "kg"}</p>
								<p>{data.ffmp_l_arm + "%"}</p>
							</div>
							<div className="left-bottom">
								<p>{data.ffm_l_leg + "kg"}</p>
								<p>{data.ffmp_l_leg + "%"}</p>
							</div>
							<div className="right-top">
								<p>{data.ffm_r_arm + "kg"}</p>
								<p>{data.ffmp_r_arm + "%"}</p>
							</div>
							<div className="right-bottom">
								<p>{data.ffm_r_leg + "kg"}</p>
								<p>{data.ffmp_r_leg + "%"}</p>
							</div>
							<div className="body-center">
								<span>{data.ffm_trunk + "kg"}</span>
								<span>{data.ffmp_trunk + "%"}</span>
							</div>
						</div>
					</div>
				</section>
				
				<section className="no-padding">
					<div className="sec-hd">
						<h3>节段脂肪分析</h3>
					</div>
					<div className="sec-bd">
						<div className="mod-body">
							<div className="left-top">
								<p>{data.bfm_l_arm + "kg"}</p>
								<p>{data.pbf_l_arm + "%"}</p>
							</div>
							<div className="left-bottom">
								<p>{data.bfm_l_leg + "kg"}</p>
								<p>{data.pbf_l_leg + "%"}</p>
							</div>
							<div className="right-top">
								<p>{data.bfm_r_arm + "kg"}</p>
								<p>{data.pbf_r_arm + "%"}</p>
							</div>
							<div className="right-bottom">
								<p>{data.bfm_r_leg + "kg"}</p>
								<p>{data.pbf_r_leg + "%"}</p>
							</div>
							<div className="body-center">
								<span>{data.bfm_trunk + "kg"}</span>
								<span>{data.pbf_trunk + "%"}</span>
							</div>
						</div>
					</div>
				</section>
				
				<div className="mod-box">
					<h4>评分</h4>
					
					<div className="mod-score">
						<div className="pie_left">
							<div className="left" style={{transform: 'rotate(' + this.getScoreP(data.growth_score).left + 'deg)'}} />
						</div>
						<div className="pie_right">
							<div className="right" style={{transform: 'rotate(' + this.getScoreP(data.growth_score).right + 'deg)'}}/>
						</div>
						<div className="mask"></div>
						<em className="tag-num">{data.growth_score}</em>
					</div>
					<p><i>*</i>总得分反应身体成分的评估值 肌肉发达的人可能超过100分</p>
					
					<table className="mod-table">
						<tbody>
							<tr>
								<th colSpan="2">体重控制</th>
							</tr>
							<tr>
								<td>目标体重</td>
								<td>{data.target_weight}kg</td>
							</tr>
							<tr>
								<td>体重控制</td>
								<td>{data.weight_control}kg</td>
							</tr>
							<tr>
								<td>脂肪控制</td>
								<td>{data.bfm_control}kg</td>
							</tr>
							<tr>
								<td>肌肉控制</td>
								<td>{data.ffm_control >= 0 ? "+" + data.ffm_control : ""}kg</td>
							</tr>
						</tbody>
					</table>
					
					<table className="mod-table">
						<tbody>
							<tr>
								<th colSpan="2">研究项目</th>
							</tr>
							<tr>
								<td>去脂体重</td>
								<td>{(data.weight - data.bfm).toFixed(1)}kg</td>
							</tr>
							<tr>
								<td>基础代谢率</td>
								<td>{data.bmr}kcal</td>
							</tr>
							<tr>
								<td>腰臀比</td>
								<td>{data.whr}（0.80~0.90）</td>
							</tr>
							<tr>
								<td>内脏脂肪等级</td>
								<td>{data.vfl}（1~9）</td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
		);
	}
}
