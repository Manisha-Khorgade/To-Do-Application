import React  from "react";
import {v4 as uuidv4} from "uuid";


const Form = ({input, setInput, todos, setTodos, editTodos, setEditTodos  }) => {
    const onInputChange =(event) => {
        setInput(event.target.value)
    };

    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title:input, completed: false}]);
        setInput("");
    };
    return (
        <form onSubmit={onFormSubmit} >
           <div className="header-container">
                <input
                type="text" 
                placeholder="Enter a todo item"
                className="task-input" 
                value={input}
                required
                onChange={onInputChange}
                />
                <button className="button-add" type="submit" >
                    Add
                </button>
            </div>
        </form>
    );
};
export default Form;