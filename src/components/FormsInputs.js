import React, { useState } from 'react';
import './formInput.css';

function FormsInputs(props) {
  const [ focused, setFocused ] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="label">{ label }</label>
      <input
        key={ id }
        { ...inputProps }
        onChange={ onchange }
        onBlur={ handleFocused }
        onFocus={ () =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={ focused.toString() }
      />
      <span>{ errorMessage } </span>
    </div>
  );
}

export default FormsInputs;
