import React, { useState } from 'react';
import './selectComponent.css';

const SelectComponent = ({ options, placeholder="", onChange, selectedKey, open, setOpen }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSelect = (option) => {
        onChange !== undefined && onChange(option.key);
        onChange !== undefined && setInputValue(option.value);
        setOpen(false);
    }

    const clearDropdown = () => {
        setInputValue("")
        onChange("");
    }

    const onInputClick = () => {
        setOpen((prev) => !prev)
    }

  return (
    <div className='dropdown_container'>
        <div className='input_container' onClick={onInputClick}>
            <input 
                type="text" 
                value={inputValue} 
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <div className='input_arrow_container'>
                <i className='input_arrow'/>
            </div>
            {selectedKey || inputValue ? <div className='input_clear_container' onClick={clearDropdown}>x</div> : null}
        </div>

        <div className={`dropdown ${open ? 'visible' : ''}`}>
            {options.map((option) => (
                <div className='option' key={option.key} onClick={() => handleSelect(option)}>
                    {option.value}
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectComponent