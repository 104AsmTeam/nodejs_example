'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentWillUnmount(){
	}

	testConnection(d) {
		let c1 = d?'/'+d:'';
		this.ajax = new Ajax({
			method: 'get',
			url: '/api/setting/company'+c1,
			onComplete: () => {
				console.log('onComplete');
			},
			onSuccess: (code, message, data) => {
				console.log('onSuccess', data,message,code);
			}
		});
		this.ajax.send();
	}

	render() {
		return <div ref="root">

			<div ref="form" className="form-horizontal">
				<h2>公司設定</h2>
				<hr />
				<button onClick={()=>this.testConnection()}>Connection Test</button>

			</div>

		</div>
	}
}

export default Home;
