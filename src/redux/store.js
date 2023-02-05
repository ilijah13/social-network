import dialogsReduser from './dialogs-reduser';
import profileReduser from './profile-reduser';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'Hello', likesCount: 1 },
        { id: 3, message: 'How is you it progress', likesCount: 2 },
        { id: 4, message: 'Good Morning', likesCount: 5 },
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { name: 'Ilya', id: 1 },
        { name: 'Ivan', id: 2 },
        { name: 'Sasha', id: 3 },
        { name: 'Lera', id: 4 },
        { name: 'Nata', id: 5 },
        { name: 'Vera', id: 6 },
        { name: 'Igor', id: 7 },
      ],

      messages: [
        { message: 'Hi', id: 1 },
        { message: 'Hello', id: 2 },
        { message: 'Yo', id: 3 },
        { message: 'How are you?', id: 4 },
        { message: 'Good morning', id: 5 },
        { message: 'Wazzap', id: 6 },
        { message: 'Alloha', id: 7 },
      ],
      newMessageText: '',
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
