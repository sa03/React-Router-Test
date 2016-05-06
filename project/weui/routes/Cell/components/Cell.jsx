import React from 'react';

export default class Cell extends React.Component {
	render() {
		return (
			<div>
				<div className="hd">
				<h1 className="page_title">Cell</h1>
				</div>
				<div className="bd">
				<div className="weui_cells_title">带说明的列表项</div>
				<div className="weui_cells">
					<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
						<p>标题文字</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</div>
				</div>
				<div className="weui_cells_title">带图标、说明的列表项</div>
				<div className="weui_cells">
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<img
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		alt
		style={{width: 20, marginRight: 5, display: 'block'}} />
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>标题文字</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</div>
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<img
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		alt
		style={{width: 20, marginRight: 5, display: 'block'}} />
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>标题文字</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</div>
				</div>
				<div className="weui_cells_title">带跳转的列表项</div>
				<div className="weui_cells weui_cells_access">
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">
					</div>
					</a>
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">
					</div>
					</a>
				</div>
				<div className="weui_cells_title">带说明、跳转的列表项</div>
				<div className="weui_cells weui_cells_access">
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</a>
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</a>
				</div>
				<div className="weui_cells_title">带图标、说明、跳转的列表项</div>
				<div className="weui_cells weui_cells_access">
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_hd">
		<img
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		alt
		style={{width: 20, marginRight: 5, display: 'block'}} />
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</a>
					<a className="weui_cell" href="javascript:;">
					<div className="weui_cell_hd">
		<img
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		alt
		style={{width: 20, marginRight: 5, display: 'block'}} />
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">说明文字</div>
					</a>
				</div>
				<div className="weui_cells_title">单选列表项</div>
				<div className="weui_cells weui_cells_radio">
					<label
		className="weui_cell weui_check_label"
		htmlFor="x11">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">
						<input
		type="radio"
		className="weui_check"
		name="radio1"
		id="x11" />
						<span className="weui_icon_checked" />
					</div>
					</label>
					<label
		className="weui_cell weui_check_label"
		htmlFor="x12">
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		cell standard
		</p>
					</div>
					<div className="weui_cell_ft">
						<input
		type="radio"
		name="radio1"
		className="weui_check"
		id="x12"
		defaultChecked="checked" />
						<span className="weui_icon_checked" />
					</div>
					</label>
				</div>
				<div className="weui_cells_title">复选列表项</div>
				<div className="weui_cells weui_cells_checkbox">
					<label
		className="weui_cell weui_check_label"
		htmlFor="s11">
					<div className="weui_cell_hd">
						<input
		type="checkbox"
		className="weui_check"
		name="checkbox1"
		id="s11"
		defaultChecked="checked" />
						<i className="weui_icon_checked" />
					</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		standard is dealt for u.
		</p>
					</div>
					</label>
					<label
		className="weui_cell weui_check_label"
		htmlFor="s12">
					<div className="weui_cell_hd">
						<input
		type="checkbox"
		name="checkbox1"
		className="weui_check"
		id="s12" />
						<i className="weui_icon_checked" />
					</div>
					<div className="weui_cell_bd weui_cell_primary">
						<p>
		standard is dealicient for u.
		</p>
					</div>
					</label>
				</div>
				<div className="weui_cells_title">开关</div>
				<div className="weui_cells weui_cells_form">
					<div className="weui_cell weui_cell_switch">
					<div className="weui_cell_hd weui_cell_primary">标题文字</div>
					<div className="weui_cell_ft">
						<input className="weui_switch" type="checkbox" />
					</div>
					</div>
				</div>
				<div className="weui_cells_title">表单</div>
				<div className="weui_cells weui_cells_form">
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<label className="weui_label">qq</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		pattern="[0-9]*"
		placeholder="请输入qq号" />
					</div>
					</div>
					<div className="weui_cell weui_vcode">
					<div className="weui_cell_hd">
		<label className="weui_label">验证码</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		placeholder="请输入验证码" />
					</div>
					<div className="weui_cell_ft">
						<img src="./images/vcode.jpg" />
					</div>
					</div>
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<label className="weui_label">银行卡</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		pattern="[0-9]*"
		placeholder="请输入银行卡号" />
					</div>
					</div>
					<div className="weui_cell weui_vcode weui_cell_warn">
					<div className="weui_cell_hd">
		<label className="weui_label">验证码</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		placeholder="请输入验证码" />
					</div>
					<div className="weui_cell_ft">
						<i className="weui_icon_warn" />
						<img src="./images/vcode.jpg" />
					</div>
					</div>
				</div>
				<div className="weui_cells_tips">底部说明文字底部说明文字</div>
				<div className="weui_btn_area">
					<a
		className="weui_btn weui_btn_primary"
		href="javascript:"
		id="showTooltips">确定</a>
				</div>
				<div className="weui_cells_title">上传</div>
				<div className="weui_cells weui_cells_form">
					<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
						<div className="weui_uploader">
						<div className="weui_uploader_hd weui_cell">
							<div className="weui_cell_bd weui_cell_primary">图片上传</div>
							<div className="weui_cell_ft">0/2</div>
						</div>
						<div className="weui_uploader_bd">
							<ul className="weui_uploader_files">
							<li
		className="weui_uploader_file"
		style={{backgroundImage: 'url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)'}} />
							<li
		className="weui_uploader_file"
		style={{backgroundImage: 'url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)'}} />
							<li
		className="weui_uploader_file"
		style={{backgroundImage: 'url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)'}} />
							<li
		className="weui_uploader_file weui_uploader_status"
		style={{backgroundImage: 'url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)'}}>
								<div className="weui_uploader_status_content">
								<i className="weui_icon_warn" />
								</div>
							</li>
							<li
		className="weui_uploader_file weui_uploader_status"
		style={{backgroundImage: 'url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)'}}>
								<div className="weui_uploader_status_content">50%</div>
							</li>
							</ul>
							<div className="weui_uploader_input_wrp">
							<input
		className="weui_uploader_input"
		type="file"
		accept="image/jpg,image/jpeg,image/png,image/gif"
		multiple />
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				<div className="weui_cells_title">文本域</div>
				<div className="weui_cells weui_cells_form">
					<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
						<textarea
		className="weui_textarea"
		placeholder="请输入评论"
		rows={3}
		defaultValue={""} />
						<div className="weui_textarea_counter"><span>0</span>/200</div>
					</div>
					</div>
				</div>
				<div className="weui_toptips weui_warn js_tooltips">格式不对</div>
				<div className="weui_cells_title">表单报错</div>
				<div className="weui_cells weui_cells_form">
					<div className="weui_cell weui_cell_warn">
					<div className="weui_cell_hd">
		<label htmlFor className="weui_label">卡号</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		pattern="[0-9]*"
		defaultValue="weui input error"
		placeholder="请输入卡号" />
					</div>
					<div className="weui_cell_ft">
						<i className="weui_icon_warn" />
					</div>
					</div>
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<label htmlFor className="weui_label">日期</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="date"
		defaultValue />
					</div>
					</div>
					<div className="weui_cell">
					<div className="weui_cell_hd">
		<label htmlFor className="weui_label">时间</label>
		</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="datetime-local"
		defaultValue
		placeholder />
					</div>
					</div>
				</div>
				<div className="weui_cells_title">选择</div>
				<div className="weui_cells">
					<div className="weui_cell weui_cell_select weui_select_before">
					<div className="weui_cell_hd">
						<select className="weui_select" name="select2">
						<option value={1}>+86</option>
						<option value={2}>+80</option>
						<option value={3}>+84</option>
						<option value={4}>+87</option>
						</select>
					</div>
					<div className="weui_cell_bd weui_cell_primary">
						<input
		className="weui_input"
		type="number"
		pattern="[0-9]*"
		placeholder="请输入号码" />
					</div>
					</div>
				</div>
				<div className="weui_cells_title">选择</div>
				<div className="weui_cells">
					<div className="weui_cell weui_cell_select">
					<div className="weui_cell_bd weui_cell_primary">
						<select className="weui_select" name="select1">
						<option selected value={1}>微信号</option>
						<option value={2}>QQ号</option>
						<option value={3}>Email</option>
						</select>
					</div>
					</div>
					<div className="weui_cell weui_cell_select weui_select_after">
					<div className="weui_cell_hd">
						<label htmlFor className="weui_label">国家/地区</label>
					</div>
					<div className="weui_cell_bd weui_cell_primary">
						<select className="weui_select" name="select2">
						<option value={1}>中国</option>
						<option value={2}>美国</option>
						<option value={3}>英国</option>
						</select>
					</div>
					</div>
				</div>
				</div>
			</div>

		);
	}
}
