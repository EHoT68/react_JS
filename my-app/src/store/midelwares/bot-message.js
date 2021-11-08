import { SEND_MESSAGE } from "../messages/types";
import { sendMessage } from "../messages";


export const botSendMessage = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
     //console.log("action", action.payload.message.author);

     //console.log("session", store.getState().session.session.email);
    if (action.payload.message.author === store.getState().session.session.email) {
      setTimeout(() => {
        store.dispatch(
          sendMessage(
            {
              author: "Bot",
              value: "Hello from bot middleware",
            },
            action.payload.roomId
          )
        );
      }, 500);
    }
  }

  return next(action);
};
