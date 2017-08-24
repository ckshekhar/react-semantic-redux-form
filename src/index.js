import React from 'react';
import { Form, Input, Radio, Checkbox, Select, TextArea } from 'semantic-ui-react';


export const InputField = ({input, label, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <Input required={required} {...input} {...rest} />
    {touched && error ?<span style={{color:'#9F3A38'}}>{error}</span>: null}
  </Form.Field>
)

export const LabelInputField = ({input, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <Input required={required} {...input} {...rest} />
    {touched && error ?<span style={{color:'#9F3A38'}}>{error}</span>: null}
  </Form.Field>
)

export const TextAreaField = ({input, label, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <TextArea required={required} {...input} {...rest} />
    {touched && error ? <span style={{color:'#9F3A38'}}>{error}</span> : null}
  </Form.Field>
)

export const SelectField = ({ input, label, required, options, meta:{touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <Select search value={input.value} required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)} {...custom}/>
    {touched && error ? <span style={{color:'#9F3A38'}}>{error}</span> : null}
  </Form.Field>
)

export const ToggleField = ({input, label, defaultChecked}) => ( //eslint-disable-line
  <Form.Field control={Radio} toggle label={label}
    checked={input.value ? true : false}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(!data.checked)}/>
);

export const Toggle = ({input, label, defaultChecked}) => ( //eslint-disable-line
  <Radio toggle label={label}
    checked={input.value ? true : false}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(!data.checked)} />
);

export const RadioComponent = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Radio label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const RadioField = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field control={Radio} label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const CheckboxComponent = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Checkbox label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const CheckboxField = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field control={Checkbox} label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);
