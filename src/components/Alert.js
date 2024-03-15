import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    // Convert the entire word to lowercase
    const lower = word?.toLowerCase();

    // Capitalize the first letter and concatenate it with the rest of the word
    return lower?.charAt(0).toUpperCase() + lower?.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
      </div>
    )
  );
}
