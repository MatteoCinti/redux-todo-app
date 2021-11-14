import React from 'react';

import Form from '../Form/Form.component';
import TextInput from '../TextInput/TextInput.component';
import SelectInput from '../SelectInput/SelectInput.component';

const TodoForm = props => (
  <Form {...props}>
    <TextInput type="text" name="title" label="Title" className={props.classValue} />
    <TextInput type="text-area" name="body" label="Body" className={props.classValue} />
    <SelectInput type="text" name="category" label="Category" className={props.classValue} />
  </Form>
);

export default TodoForm;
