import React from "react";
import { FormField } from "react-form";
import Error from "./Error";
import "./TextInput.css";

const Input = props => {
  const { fieldDidUpdate, fieldApi, onInput, className, ...rest } = props;
  const { getValue, setValue, setTouched, getError, getTouched } = fieldApi;

  const touched = getTouched();
  const error = getError();

  const hasError = touched && error;
  const inputClass = className + hasError ? " Donate_TextInput_Error" : "";

  return (
    <div className="Donate_TextInput">
      <input
        className={inputClass}
        value={getValue()}
        onInput={e => {
          setValue(e.target.value);
          if (fieldDidUpdate) {
            fieldDidUpdate(e.target.value);
          }
          if (onInput) {
            onInput(e);
          }
        }}
        onBlur={() => {
          setTouched();
        }}
        {...rest}
      />
      <Error touched={touched} error={error} />
    </div>
  );
};

export default ({ field, ...props }) => (
  <FormField field={field}>
    <Input {...props} />
  </FormField>
);
