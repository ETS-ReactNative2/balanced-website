import React from "react";
import "./Error.css";

const Error = ({ error, touched }) => {
  if (!error || !touched) return null;

  return <span className="Donate_Error">{error}.</span>;
};

export default Error;
