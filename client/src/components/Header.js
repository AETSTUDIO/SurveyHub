import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeBilling from "./StripeBilling";

class Header extends Component {
  render() {
    let loggedInLinks = null;

    loggedInLinks = this.props.auth ? (
      <React.Fragment>
        <li>
          <StripeBilling />
        </li>
        <li style={{ margin: "0 5px 0 10px" }}>Credits: {this.props.auth.credits}</li>
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      </React.Fragment>
    ) : (
      <li>
        <a href="/auth/google">Login With Google</a>
      </li>
    );

    return (
      <nav className="light-blue darken-1">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Survey Express
          </Link>
          <ul className="right">{loggedInLinks}</ul>
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
