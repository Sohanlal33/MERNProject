import React from "react";
import './AuthInput.css';

export const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  showErrorMessage,
  validationMessage,
}) => {
  return (
    <div className="auth-input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`auth-input ${showErrorMessage ? "input-error" : ""}`}
      />
      {showErrorMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
};
