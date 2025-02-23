import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({ todos, setTodos }) => {
    const [input, setInput] = useState('');
    const [showModel, setShowModel] = useState(false);

    const onchange = (e) => {
        setInput(e.target.value);
    };

    const onsubmit = (e) => {
        e.preventDefault(); 

        if (input.trim() === "") {
            setShowModel(true);
            return; 
        }

        setTodos([
            ...todos, { name: input, completed: false, id: uuid() }
        ]);
        setInput('');
    };

    return (
        <form onSubmit={onsubmit}>
            <input
                className='form-input'
                type='text'
                placeholder='Add a new task...'
                autoComplete='off'
                value={input}
                onChange={onchange}
            />

            <button className='form-button' type='submit'><b>Add</b></button> 
            {showModel && (
                <div className='modal-content'>
                    <p>Please enter a task before adding</p>
                    <button onClick={() => setShowModel(false)}>OK</button>
                </div>
            )}
        </form>
    );
};

export default Form;