import { 
   SEND_MESSAGE,
   GET_MESSAGES_START,
   GET_MESSAGES_SUCESS,
   GET_MESSAGES_ERROR
} from "./types";

export const sendMessage = (message, roomId) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
    meta: {
      delay: 500,
    },
  };
};
export const getMessagesStart = () => ({
   type: GET_MESSAGES_START,
});
export const getMessagesSusess = (messages) => ({
   type: GET_MESSAGES_SUCESS,
   payload: messages
});
export const getMessagesError = (error) => ({
   type:  GET_MESSAGES_ERROR,
   payload: error
});