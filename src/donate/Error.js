import React from "react";

const Error = ({ errors, fieldName, touched }) => {
  const errorMessage = errors && errors[fieldName];
  const isTouched = touched && touched[fieldName];

  if (!errorMessage || !isTouched) return null;

  return (
    <div>
      <h5>{errorMessage}</h5>
    </div>
  );
};

export default Error;
