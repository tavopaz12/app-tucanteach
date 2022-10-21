import React from "react";

function InputLogin({
  title,
  titleLabel,
  inputType,
  value,
  onChange,
  icon,
  onBlur,
  pattern,
  placeholder,
  minlength,
  maxlength,
}) {
  return (
    <div className="field">
      <p className="field__title">{titleLabel}:</p>
      {icon}
      <input
        className="field__input"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern={pattern}
        minLength={minlength}
        maxLength={maxlength}
        title={title}
        required
      />
    </div>
  );
}

export default InputLogin;
