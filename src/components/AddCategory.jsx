import React, { useState } from 'react'
import PropTypes from "prop-types"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if( inputValue.trim().length <= 1 ){return};

        //setCategories((c) => [inputValue, ...c]);
        onNewCategory( inputValue.trim() );
        setInputValue("");
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder='Search gifs'
            value={inputValue}
            onChange={ onInputChange } //(event) => onInputChange(event) //e) => setInputValue(e.target.value)
        />
    </form>
    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}