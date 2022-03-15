import React from "react";

export default function Alert(props) {
  const capatlize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible show" role="alert`}
      >
        <strong>{capatlize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
