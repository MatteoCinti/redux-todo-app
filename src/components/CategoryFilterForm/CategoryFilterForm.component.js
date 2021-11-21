import React from 'react';

import Form from '../Form/Form.component';
import SelectInput from '../SelectInput/SelectInput.component';

const CategoryFilterForm = props => (
  <Form {...props}>
    <SelectInput type="text" name="category" label="Category" className={props.classValue} />
  </Form>
);

export default CategoryFilterForm;