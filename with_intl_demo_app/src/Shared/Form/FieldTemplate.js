import React from "react";
import { FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

const FieldTemplate = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  
  if (touched) {
    if (error) {
      input.invalid = true;
    } else {
      input.valid = true;
    }
  }

  return (
    <FormGroup>
      <Label for={label}>{label}</Label>
      <Input type={type} {...input} id={label} placeholder={placeholder} />
      {touched && error && <FormFeedback>{error}</FormFeedback>}
      {/* <FormText>{placeholder}</FormText> */}
    </FormGroup>
  );
};

export default FieldTemplate;
