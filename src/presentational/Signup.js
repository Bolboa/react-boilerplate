import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const Signup = ({ labelText, inputValue, submitValue, handleName, handleSubmit }) => (
    <div>
      <label>{labelText}</label>
      <form>
          <input type="text" name={inputValue} onChange={handleName} />
          <button type="button" onClick={handleSubmit}>{submitValue}</button>
      </form>
    </div>
  );

Signup.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  submitValue: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};


export default Signup;