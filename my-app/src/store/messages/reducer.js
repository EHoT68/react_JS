import { SEND_MESSAGE } from "./types";

const initialState = {
  messages: {
    room1: [{ value: "Room1", author: "Bot", date: new Date() }],
    room2: [{ value: "Room2", author: "Bot", date: new Date() }],
  },
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
    default:
      return state;
  }
};
