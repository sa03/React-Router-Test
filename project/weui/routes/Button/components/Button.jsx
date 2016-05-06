import React from 'react';

export default class Button extends React.Component {
	render() {
		return (
			<div>
				<div className="hd">
					<h1 className="page_title">Button</h1>
				</div>
				<div className="bd spacing">
					<a href="javascript:;" className="weui_btn weui_btn_primary">按钮</a>
					<a href="javascript:;" className="weui_btn weui_btn_disabled weui_btn_primary">按钮</a>
					<a href="javascript:;" className="weui_btn weui_btn_warn">确认</a>
					<a href="javascript:;" className="weui_btn weui_btn_disabled weui_btn_warn">确认</a>
					<a href="javascript:;" className="weui_btn weui_btn_default">按钮</a>
					<a href="javascript:;" className="weui_btn weui_btn_disabled weui_btn_default">按钮</a>
					<div className="button_sp_area">
						<a href="javascript:;" className="weui_btn weui_btn_plain_default">按钮</a>
						<a href="javascript:;" className="weui_btn weui_btn_plain_primary">按钮</a>
						<a href="javascript:;" className="weui_btn weui_btn_mini weui_btn_primary">按钮</a>
						<a href="javascript:;" className="weui_btn weui_btn_mini weui_btn_default">按钮</a>
					</div>
				</div>
			</div>
		);
	}
}
