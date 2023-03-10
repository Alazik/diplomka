import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); //Вывел это строку из функции rerenderEntireTree чтобы не пропал фокус с textarea, после ввода каждого символа актуальной на версии реакта объявляется переменная root, через которую уже позже рендериться приложение

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
reportWebVitals();
