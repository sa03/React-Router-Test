import React from 'react';

export default class Toast extends React.Component {
	render() {
		return (
			<div>
				<div className="hd">
				<h1 className="page_title">Toast</h1>
				</div>
				<div className="bd spacing">
				<a href="javascript:;" className="weui_btn weui_btn_primary" id="showToast">点击弹出Toast</a>
				<a href="javascript:;" className="weui_btn weui_btn_primary" id="showLoadingToast">
					点击弹出Loading Toast
				</a>
				</div>
				{/*BEGIN toast*/}
				<div id="toast" style={{display: 'none'}}>
				<div className="weui_mask_transparent" />
				<div className="weui_toast">
					<i className="weui_icon_toast" />
					<p className="weui_toast_content">已完成</p>
				</div>
				</div>
				{/*end toast*/}
				{/* loading toast */}
				<div id="loadingToast" className="weui_loading_toast" style={{display: 'none'}}>
				<div className="weui_mask_transparent" />
				<div className="weui_toast">
					<div className="weui_loading">
					<div className="weui_loading_leaf weui_loading_leaf_0" />
					<div className="weui_loading_leaf weui_loading_leaf_1" />
					<div className="weui_loading_leaf weui_loading_leaf_2" />
					<div className="weui_loading_leaf weui_loading_leaf_3" />
					<div className="weui_loading_leaf weui_loading_leaf_4" />
					<div className="weui_loading_leaf weui_loading_leaf_5" />
					<div className="weui_loading_leaf weui_loading_leaf_6" />
					<div className="weui_loading_leaf weui_loading_leaf_7" />
					<div className="weui_loading_leaf weui_loading_leaf_8" />
					<div className="weui_loading_leaf weui_loading_leaf_9" />
					<div className="weui_loading_leaf weui_loading_leaf_10" />
					<div className="weui_loading_leaf weui_loading_leaf_11" />
					</div>
					<p className="weui_toast_content">数据加载中</p>
				</div>
				</div>
			</div>
		);
	}
}
