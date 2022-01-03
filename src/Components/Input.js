import React from "react";
import PropTypes from "prop-types";

const Input = props => {
    const labelStyle = `font-semibold text-sm text-gray-600 pb-1 block ${props.labelStyle === undefined ? "" : props.labelStyle}`;
    const inputStyle = `border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full ${props.inputStyle === undefined ? "" : props.inputStyle}`;
    const error = <span className="flex items-center font-bold tracking-wide text-red-500 text-xs -mt-3 mb-3">{props.error}</span>;
    return (
        <div>
            <label className={labelStyle}>{props.label}</label>
            <input type="text" className={inputStyle} {...props} />
            {props.error !== "" ? error : null}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    error: PropTypes.string
};

export default Input;
