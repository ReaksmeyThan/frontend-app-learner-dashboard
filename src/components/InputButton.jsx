import PropTypes from 'prop-types';
import React from 'react';

const InputButton = ({ inputPlaceholder, buttonText }) => (
  <div>
    <input type="text" placeholder={inputPlaceholder} />
    <button type="button">{buttonText}</button>
  </div>
);

InputButton.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default InputButton;
