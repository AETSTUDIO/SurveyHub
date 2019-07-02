import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const surveys = this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey.id} className="card">
          <div className="card-content text-darken-1">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
    return <div>{surveys}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return {
    surveys
  };
};

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
