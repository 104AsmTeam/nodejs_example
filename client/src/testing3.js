import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import {
	Header, Footer,
	Company,
	Home
} from './components';

Constants.J104.Options = require('../../constants').SYS_OPTIONS;

class Testing extends React.Component{
	constructor(props) {
		super(props);
		window.C = {};
	}

	componentDidMount(){
	}

	render(){
		return <div>
			<Header />
			<div className="TES-body TES-wrapper">
				{this.props.children}
			</div>
			<Footer />
		</div>
	}
}


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Testing}>
			<IndexRoute component={Home} />
			<Route path="/setting/company" component={Company} />

		</Route>
	</Router>
), document.getElementById('testing3'));
