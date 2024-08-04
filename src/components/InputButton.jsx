// InputButton.js
import React, { useState } from 'react';
import './InputButton.css';

const InputButton = ({ inputPlaceholder, buttonText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    alert(`Button clicked with input: ${inputValue}`);
  };

  return (
    <div className="input-button-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder={inputPlaceholder} 
        className="input-field"
      />
      <button onClick={handleClick} className="button">
        {buttonText} <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default InputButton;
