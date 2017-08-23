# react-semantic-redux-form
Semantic-ui-react component integration with Redux form


# Example input text
import { Field } from 'redux-form';

import { InputField } from 'react-semantic-redux-form';

`<Field name='name' component={InputField}
	label='Name' placeholder='Name' />`

# Example input textarea
import { Field } from 'redux-form';

import { TextAreaField } from 'react-semantic-redux-form';

`<Field name='name' component={TextAreaField}
	label='Name' placeholder='Name' />`


 # Example Login Form

import React from 'react';

import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';

import { Form, Icon, Button } from 'semantic-ui-react';

import { LabelInputField, CheckboxField } from 'react-semantic-redux-form';

const LoginForm = props => {

  return (

    <Form onSubmit={handleSubmit}>
      <Field name='username' component={LabelInputField}
      label={{ content: <Icon color='blue' name='user' size='large'/> }}
      labelPosition='left'
      placeholder='Username'/>

      <Field name='password' component={LabelInputField}
      type='password'
      label={{ content: <Icon color='blue' name='lock' size='large'/> }}
      labelPosition='left'
      placeholder='Password'/>

      <Form.Group>
      <Field name='remember' component={CheckboxField}
      label='Stay sign in'/>

      </Form.Group>
      <Form.Field control={Button} primary className='submit-btn'
      type='submit'>
      Login
      </Form.Field>

    </Form>
  )
}

export default reduxForm({
	form: 'loginForm',	// a unique identifier for this form

})(LoginForm)
