import React, { useState } from 'react'

export const AddCategory= ({setCategories}) => {
    const [inputValue, setinputValue] = useState('Hola Mundo');
    const handleInputChange = ( e ) => {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setCategories( categories => [...categories,inputValue]);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} value={inputValue}/>
        </form>
        </>
    )
}
