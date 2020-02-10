import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ( props ) => {
  return (
    <div>
      <h5>Please confirm your entries!</h5>
      <div>
        <div>
          <label><h5>Survey Title</h5></label>
          <div>{props.formValues.title}</div>
        </div>
        <div>
          <label><h5>Survey Subject</h5></label>
          <div>{props.formValues.subject}</div>
        </div>
        <div>
          <label><h5>Survey Body</h5></label>
          <div>{props.formValues.body}</div>
        </div>
        <div>
          <label><h5>Survey Emails</h5></label>
          <div>{props.formValues.emails}</div>
        </div>
      </div>
      <button
        className="yellow darken-3 btn-flat"
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        onClick= { () => props.submitSurvey(props.formValues, props.history) }
        className="green btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

// store form field value into Redux
function mapStateToProps(state) {
  return {
    formValues: state.form.SurveyForm.values,
  };

}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
