import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: "1"},
  {id: 2, message: "Salam bro", likesCount: "12"},
  {id: 3, message: "Чуваки сверху пидоры", likesCount: "100"}
];

let dialogs = [
  { id: 1, name: "Nurik" },
  { id: 2, name: "Sula" },
  { id: 3, name: "Islam" },
  { id: 4, name: "Almaznik" },
];

let messages = [
  { id: 1, message: "Siiuuuuuuuuuuuuuuu" },
  { id: 2, message: "Я просто обожаю 3d хуйню" },
  { id: 3, message: "Салам бро, как ты?" },
  { id: 4, message: "Эщс" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
