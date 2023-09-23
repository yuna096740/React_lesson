import { nanoid } from "nanoid";
import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FillterButton from "./components/FilterButton";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    // スプレッド演算子(...)
    setTasks([...tasks, newTask]);
  }

  const subject = props.subject;

  const taskList = tasks.map((task) => 
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

        <Form addTask={addTask} />

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