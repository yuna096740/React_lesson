import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", name: "食べる", completed: true },
  { id: "todo-1", name: "寝る", completed: false },
  { id: "todo-2", name: "繰り返し", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App subject="React!" tasks={DATA} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ReactDOM.render();
