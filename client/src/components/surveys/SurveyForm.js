import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Subject Title', name: 'title'},
  { label: 'Subject Subject', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'recipients'},
];

class SurveyForm extends Component {
  renderField(){
    // return _.map(FIELDS, field => {
    //   return <Field label=field.label type="text" name=field.name component={SurveyField} />
    // })
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} label={label} type="text" name={name} component={SurveyField} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit( () => this.props.onSurveySubmit())}>
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text">
            CANCEL
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            NEXT
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  errors.recipients = validEmails(values.recipients || '');

  // if (!values.title){
  //   errors.title = 'You must provide a title';
  // }
  //
  // if (!values.subject){
  //   errors.subject = 'You must provide a subject';
  // }
  //
  // if (!values.body){
  //   errors.body = 'You must provide an email body';
  // }
  // Validate each value
  _.each(FIELDS, (field) => {
    if(!values[field.name]){
      errors[field.name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'SurveyForm',
  destroyOnUnmount: false // this field persist form value
})(SurveyForm);
