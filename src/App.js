import { nanoid } from "nanoid";
import React, { useState,useRef,useEffect } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Navbar from "./components/Navbar/nav";
import Footer from "./components/Footer/footer";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";

// フォーカス管理
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// フィルタの定義
const FILTER_MAP = {
  "全て": () => true,
  "未完了": (task) => !task.completed,
  "完了": (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {

  // フィルタ表示
  const [filter, setFilter] = useState("全て");
  
  // Taskの追加処理
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    // スプレッド演算子(...)
    setTasks([...tasks, newTask]);
  }
  
  const [tasks, setTasks] = useState(props.tasks);
  const subject = props.subject;
  
  // フォーカスインジケーター
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  // task削除後に見出しにフォーカスを当てる
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);
  
  // Task checked or not & Taskの更新処理
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        // スプレッド演算子(...)
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Taskの編集処理
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // Taskの削除処理
  function deleteTask(id) {
    const confirm = window.confirm("本当によろしいですか？")
    if (confirm) {
      const remainingTasks = tasks.filter((task) => id !== task.id);
      // Taskリストを更新。削除されたTaskが含まれない新しいタスクリストに置き換え。
      setTasks(remainingTasks);
    };
  }
  
  const taskList = tasks
    // statusのフィルタリング
    .filter(FILTER_MAP[filter])
    .map((task) => 
      <Todo 
        id ={ task.id } 
        name={ task.name } 
        completed={ task.completed }
        key={ task.id }
        toggleTaskCompleted={ toggleTaskCompleted }
        deleteTask={ deleteTask }
        editTask={ editTask }
      />
  );

  // change aria-pressed
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  // Taskのカウント更新処理
  const tasksNoun = taskList.length >= 2 ? "tasks" : "task";
  const headingText = `${ taskList.length } ${ tasksNoun } のリマインド`;

  return (
    <div className="todoapp stack-large">
      
      <Navbar />
      
      <h1>Todo{ subject }</h1>

        <Form addTask={ addTask } />

      <div className="filters btn-group stack-exception">
        { filterList }
      </div>

      {/* 要素をフォーカス可能にする */}
      <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
        { headingText }
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        
        { taskList }

      </ul>
      <Footer />
    </div>
  );
}

export default App;