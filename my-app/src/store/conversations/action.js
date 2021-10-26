import { HANDLE_CHANGE_MESSAGE_VALUE, CREATE_CONVERSATION } from "./types";

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const createConversation = (name) => ({
  type: CREATE_CONVERSATION,
  payload: name,
});
