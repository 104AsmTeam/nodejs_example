'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
	constructor(props){
		super(props);
		C.Header = this;
		this.state = {
			menu: 0
		}
	}

	componentDidMount(){
	}

	componentWillUnmount(){
	}

	render(){
		return <div className="TES-header">
			<div className="TES-wrapper">
				<div className="-title">測評中心</div>
				<div className="-menu ico ico-pencil"
					onMouseEnter={() => {this.setState({menu:1})}}
					onMouseLeave={() => {this.setState({menu:0})}}>
					施測
					{this.state.menu == 1 ? <MegaMenu1 /> : '' }
				</div>
				<div className="-menu ico ico-report"
					onMouseEnter={() => {this.setState({menu:2})}}
					onMouseLeave={() => {this.setState({menu:0})}}>
					報表
					{this.state.menu == 2 ? <MegaMenu2 /> : '' }
				</div>
				<div className="-menu ico ico-config"
					onMouseEnter={() => {this.setState({menu:3})}}
					onMouseLeave={() => {this.setState({menu:0})}}>
					設定
					{this.state.menu == 3 ? <MegaMenu3 /> : '' }
				</div>
				<div className="-menu pull-right ico ico-help"
					onMouseEnter={() => {this.setState({menu:9})}}
					onMouseLeave={() => {this.setState({menu:0})}}>
					測評說明
					{this.state.menu == 9 ? <MegaMenu9 /> : '' }
				</div>
			</div>
		</div>
	}
}

class MegaMenu1 extends React.Component {
	render(){
		return <div className="TES-MegaMenu">
			<div className="-group">
				施測
				<div className="--m">通知施測</div>
				<div className="--m">現場施測</div>
				<div className="--m">通知施測紀錄</div>
			</div>
			<div className="-group">
				管理工具
				<div className="--m">題本設定</div>
				<div className="--m">自動測驗</div>
				<div className="--m">測評通知</div>
				<div className="--m">施測聲明</div>
			</div>
		</div>
	}
}

class MegaMenu2 extends React.Component {
	render(){
		return <div className="TES-MegaMenu">
			<div className="-group">
				測評結果
				<div className="--m">個人報表</div>
				<div className="--m">團體報表</div>
			</div>
			<div className="-group">
				常模
				<div className="--m">市場常模</div>
				<div className="--m">公司常模</div>
			</div>
		</div>
	}
}

class MegaMenu3 extends React.Component {
	render(){
		return <div className="TES-MegaMenu">
			<div className="-group">
				系統
				<div className="--m"><Link to="/setting/company">公司設定</Link></div>
				<div className="--m">權限管理</div>
				<div className="--m">帳務與點數</div>
			</div>
		</div>
	}
}

class MegaMenu9 extends React.Component {
	render(){
		return <div className="TES-MegaMenu right">
			<div className="-group">
				測評說明
				<div className="--m">測評介紹</div>
				<div className="--m">報表解讀DIY</div>
				<div className="--m">常見問題</div>
			</div>
		</div>
	}
}

export default Header;
