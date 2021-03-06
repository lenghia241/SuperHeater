import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./components/Introduction/login";
import DeviceMainComponent from "./components/MainScreen/Rooms/DeviceMainComponent";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Analyst from "./components/Anslysist/AllRoom";
import Dashboard from "./components/DashBoard/dashboard";
library.add(faCheckSquare, faCoffee);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	goHeatingPage = () => {
		this.props.history.push("/devices");
	};
	goAnalystPage = () => {
		this.props.history.push("/analyst");
	};

	goDashBoardPage = () => {
		this.props.history.push("/dashboard");
	};

	render() {
		const { isAuthenticated } = this.props;
		return (
			<div className="container">
				<div className="ui grid">
					<div className="four wide column main">
						{!isAuthenticated ? (
							<div>
								<div className="userAva">
									<img src={require("./image/menu/ava.png")} alt="" />
								</div>

								<ul className="unorderList">
									<li className="menuList">
										<img className="menuIcon" src={require("./image/menu/home.png")} alt="" /> <span onClick={this.goDashBoardPage}>Dashboard</span>
									</li>
									<li className="menuList">
										<img className="menuIcon" src={require("./image/menu/heater.png")} alt="" />{" "}
										<span onClick={this.goHeatingPage}>Heating machines</span>
									</li>
									<li className="menuList">
										<img className="menuIcon" src={require("./image/menu/line-chart.png")} alt="" />{" "}
										<span onClick={this.goAnalystPage}>Analysis</span>
									</li>
									<li className="menuList">
										<img className="menuIcon" src={require("./image/menu/user-silhouette.png")} alt="" /> <span>Setting</span>
									</li>
								</ul>
							</div>
						) : (
							""
						)}

						<img className="image-menu-city-black" src={require("./image/nightcities.png")} alt="Cover side bar" />
						<img className="image-menu-city-white" src={require("./image/skyscraper.png")} alt="side bar decoration" />
					</div>
					<div className="twelve wide wide column router">
						<Switch>
							<Route path="/" exact component={Dashboard} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/devices" component={DeviceMainComponent} />
							<Route path="/analyst" component={Analyst} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.Authenticate.isAuthenticated
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
