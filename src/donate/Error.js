import React from "react";
import "./Error.css";

const Error = ({ errors, fieldName, touched }) => {
  const errorMessage = errors && errors[fieldName];
  const isTouched = touched && touched[fieldName];

  if (!errorMessage || !isTouched) return null;

  return <span className="Donate_Error">{errorMessage}.</span>;
};

export default Error;
