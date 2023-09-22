import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FillterButton from "./components/FilterButton";

function App(props) {
  const subject = props.subject;
  const taskList = props.tasks.map((task) => 
    <Todo 
      id ={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
    />
  );
  return (
    <div className="todoapp stack-large">
      <h1>Todo{ subject }</h1>
        <Form />
      <div className="filters btn-group stack-exception">
        <FillterButton name="All"/>
        <FillterButton name="Active"/>
        <FillterButton name="Completed"/>
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        
        {taskList}

      </ul>
    </div>
  );
}

export default App;