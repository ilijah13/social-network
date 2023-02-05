const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 8,
        message: state.newMessageText,
      };

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };

    default:
      return state;
  }
};
export const sendMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};
export default dialogsReduser;
