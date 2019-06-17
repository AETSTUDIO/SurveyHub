import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class StripeBilling extends Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyHub Payment Form"
        description="$5 for 5 email survey credits"
        amount={500} //AUS Cents
        token={token => this.props.handleToken(token)} //Token from Stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="waves-effect waves-light btn yellow darken-2">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(StripeBilling);
