import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';
//import './components/style.css';

const App = () => {
  const [input, setInput] = useState ("");
  const [todos, setTodos] = useState ([]);
  

  return (
    <div className = "container" >
      <div className = "app-wrapper" >
           <div>
               <Header />
            </div>     
             <div>
                <Form 
                  input={input}
                  setInput={setInput}
                  todos={todos}
                  setTodos={setTodos} />
             </div>
             <br/>
             <hr/>
                <div className="List-Block">Listed Items</div>
                    <TodoList  
                        todos={todos}
                        setTodos={setTodos}  />    
                  </div> 
            </div>
  );
};

export default App;
