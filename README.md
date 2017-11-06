# react-semantic-redux-form
Semantic-ui-react component integration with Redux form

# Integration of [Semantic UI React](https://react.semantic-ui.com/introduction) with [Redux Form](http://redux-form.com)
# Available Components

<p>Components with Field suffix are Form.Field(A field is a form element containing a label and an input.) components</p>

1. InputField - [An InputField is a form field.](https://react.semantic-ui.com/collections/form#form-example-subcomponent-control)
2. [TextAreaField](https://react.semantic-ui.com/addons/text-area#text-area-example-text-area)
3. [SelectField](https://react.semantic-ui.com/addons/select)
4. [ToggleField](https://react.semantic-ui.com/addons/radio#radio-example-toggle)

5. [CheckboxField](https://react.semantic-ui.com/collections/form#form-example-required-field-shorthand)
6. LabelInputField - A Form Field input component formatted with a label. [Labled Input](https://react.semantic-ui.com/elements/input#input-example-right-labeled-basic)
7. [Toggle](https://react.semantic-ui.com/addons/radio#radio-example-toggle)
8. [Checkbox](https://react.semantic-ui.com/modules/checkbox)
9. [Input](https://react.semantic-ui.com/collections/form#form-example-subcomponent-control)
10. [TextArea](https://react.semantic-ui.com/addons/text-area#text-area-example-text-area)
11. [Select](https://react.semantic-ui.com/addons/select)
12. Dropdown
13. DropdownField
14. RangeField
15. Range
16. UploadField
16. Upload

# Radio & RadioField will be removed.

# [Demo](https://codesandbox.io/s/50kv0nvprn)

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
      <Form.Field control={Button} primary
      type='submit'>
      Login
      </Form.Field>

    </Form>
  )
}

export default reduxForm({
	form: 'loginForm',	// a unique identifier for this form

})(LoginForm)
