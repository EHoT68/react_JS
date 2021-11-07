import { SEND_MESSAGE, GET_MESSAGES_SUCESS } from "./types";

const initialState = {
   messages: {},
   chatsError: false,
   chatsSuccess: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message, date: new Date() },
          ],
        },
      };
      case GET_MESSAGES_SUCESS:
            let messages = {};
            action.payload.forEach((snapshot)=>{
               messages = { ...messages, [snapshot.key]: snapshot.val()}
            })
            console.log('messagess in reducer', action.payload);
            return {...state, chatsPending: false, messages: [...Object.entries(messages)]};
    default:
      return state;
  }
};
