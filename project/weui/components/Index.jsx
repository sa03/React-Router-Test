import React from 'react';
import {browserHistory, Link} from 'react-router';

export default class Index extends React.Component {
	render() {
		return (
            <div>
                <div className="hd">
                    <h1 className="page_title">WeUI</h1>
                    <p className="page_desc">为微信Web服务量身设计</p>
                </div>
                <div className="bd">
                    <div className="weui_grids">
                        <Link to="button" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_button" />
                            </div>
                            <p className="weui_grid_label">
                                Button
                            </p>
                        </Link>
                        <Link to="cell" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_cell" />
                            </div>
                            <p className="weui_grid_label">
                                Cell
                            </p>
                        </Link>
                        <Link to="toast" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_toast" />
                            </div>
                            <p className="weui_grid_label">
                                Toast
                            </p>
                        </Link>
                        <a href="/dialog" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_dialog" />
                            </div>
                            <p className="weui_grid_label">
                                Dialog
                            </p>
                        </a>
                        <a href="/progress" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_progress" />
                            </div>
                            <p className="weui_grid_label">
                                Progress
                            </p>
                        </a>
                        <a href="/msg" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_msg" />
                            </div>
                            <p className="weui_grid_label">
                                Msg
                            </p>
                        </a>
                        <a href="/article" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_article" />
                            </div>
                            <p className="weui_grid_label">
                                Article
                            </p>
                        </a>
                        <a href="/actionsheet" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_actionSheet" />
                            </div>
                            <p className="weui_grid_label">
                                ActionSheet
                            </p>
                        </a>
                        <a href="/icons" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_icons" />
                            </div>
                            <p className="weui_grid_label">
                                Icons
                            </p>
                        </a>
                        <a href="/panel" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_panel" />
                            </div>
                            <p className="weui_grid_label">
                                Panel
                            </p>
                        </a>
                        <a href="/tab" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_tab" />
                            </div>
                            <p className="weui_grid_label">
                                Tab
                            </p>
                        </a>
                        <a href="/searchbar" className="weui_grid">
                            <div className="weui_grid_icon">
                                <i className="icon icon_search_bar" />
                            </div>
                            <p className="weui_grid_label">
                                SearchBar
                            </p>
                        </a>
                    </div>
                </div>
            </div>

		);
	}
}