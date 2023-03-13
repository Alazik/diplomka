import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")); //Вывел это строку из функции rerenderEntireTree чтобы не пропал фокус с textarea, после ввода каждого символа актуальной на версии реакта объявляется переменная root, через которую уже позже рендериться приложение

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store._state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
