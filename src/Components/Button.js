import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const buttonStyle = `transition active:translate-y-1 duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block ${props.buttonstyle}`;
  return (
    <div>
      <button type="button" className={buttonStyle} {...props}>
        <span className="inline-block mr-2">{props.name}</span>
        {props.children}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonstyle: PropTypes.string,
};

export default Button;
