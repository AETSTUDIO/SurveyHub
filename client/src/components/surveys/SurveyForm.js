import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            type="submit"
            className="light-blue darken-1 btn-flat right white-text"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Please provide a title";
  }

  if (!values.subject) {
    errors.subject = "Please provide a subject";
  }

  if (!values.body) {
    errors.body = "Please provide a body";
  }

  if (!values.recipients) {
    errors.recipients = "Please provide a comma separated email list";
  } else {
    errors.recipients = validateEmails(values.recipients);
  }

  return errors;
};

export default reduxForm({ validate, form: "surveyForm", destroyOnUnmount: false })(SurveyForm);
