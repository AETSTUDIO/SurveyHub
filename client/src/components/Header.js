import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    let loginLink = null;

    loginLink = this.props.auth ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/auth/google">Login With Google</a>
    );

    return (
      <nav className="light-blue darken-1">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            SurveyHub
          </Link>
          <ul className="right">
            <li>{loginLink}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
