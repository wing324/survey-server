import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Subject Title', name: 'title'},
  { label: 'Subject Subject', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'emails'},
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
        <form onSubmit={this.props.handleSubmit( values => console.log(values))}>
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({ form: 'SurveyForm'})(SurveyForm);
