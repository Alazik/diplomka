let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "1" },
        { id: 2, message: "Salam bro", likesCount: "12" },
        { id: 3, message: "Чуваки сверху пидоры", likesCount: "100" },
      ],
      newPostText: "",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Siiuuuuuuuuuuuuuuu" },
        { id: 2, message: "Я просто обожаю 3d хуйню" },
        { id: 3, message: "Салам бро, как ты?" },
        { id: 4, message: "Эщс" },
      ],
      dialogs: [
        { id: 1, name: "Nurik", avatar: "" },
        { id: 2, name: "Sula" },
        { id: 3, name: "Islam" },
        { id: 4, name: "Almaznik" },
      ],
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State has been changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
