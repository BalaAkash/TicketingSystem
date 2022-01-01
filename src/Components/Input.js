import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const labelStyle = `font-semibold text-sm text-gray-600 pb-1 block ${props.labelStyle}`;
  const inputStyle = `border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full ${props.inputStyle}`;

  return (
    <div>
      <label className={labelStyle}>{props.label}</label>
      <input type="text" className={inputStyle} {...props} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
};

export default Input;
