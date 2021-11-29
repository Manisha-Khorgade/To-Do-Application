import React from "react";
//import reactdom from 'reactdom';

const TodoList = ({todos,setTodos }) => {

const handleComplete = (todo) => {
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {...item , completed: !item.completed}
            }
            return item;
            alert('Check output')
        }
        )
    )
}
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !==id));
        
    }
    //className={`todo ${todo.isCompleted && 'todo-is-completed'}`}
    //className={'todo $ {todo.completed ? "todo-is-completed" : "" }'}
//className={'list $ {todo.completed ? "complete" : "" }'}
//type="checkbox" 
    return (
        <div className="container-list">
                     <ul className="ul" >
                    
                {todos.map((todo) => (
                <div className="Task-display-block" >
                    <li className= "list-item"  key={todo.id} >
                        <div className={todo.completed ? 'todo-is-completed' : ''} > 
                            <input 
                                checked={todo.completed}
                                type="text" 
                                value={todo.title}
                                className="input-list-text"
                                onChange={(event) => event.preventDefault()} 
                            />                 
                       </div>
                            <button className= "button-complete-task-button" 
                                    onClick={() => handleComplete(todo )} > Complete
                            </button>
                            <span >  {todo.task}  </span>
                            {todo.completed ? <button className= "button-remove-task-button"  onClick ={() => handleDelete(todo)}> Remove </button> : null}
                        
                    </li>
                </div>
                )
                )}
            </ul>
        </div>
    )
}
export default TodoList;