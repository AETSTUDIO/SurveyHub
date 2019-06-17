import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
const Header = React.lazy(() => import("./Header"));
const Landing = React.lazy(() => import("./Landing"));

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let loader = (
      <div className="progress light-blue darken-1">
        <div className="indeterminate" />
      </div>
    );
    return (
      <BrowserRouter>
        <div>
          <React.Suspense fallback={loader}>
            <Header />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/surveys" exact component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </Switch>
            </div>
          </React.Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
