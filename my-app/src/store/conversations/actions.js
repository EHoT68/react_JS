import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCESS,
  GET_CONVERSATIONS_ERROR
} from "./types";

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const createConversation = (name) => ({
  type: CREATE_CONVERSATION,
  payload: name,
});

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
});

export const getConversationsStart = () => ({
   type: GET_CONVERSATIONS_START,
});
export const getConversationsSecess = (conversations) => ({
   type: GET_CONVERSATIONS_SUCESS,
   payload: conversations
});
export const getConversationsError = (error) => ({
   type: GET_CONVERSATIONS_ERROR,
   payload: error
});
