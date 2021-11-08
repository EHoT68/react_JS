import { clearMessageValue } from "../conversations";
import { sendMessage, getMessagesStart, getMessagesSusess, getMessagesError} from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));

    dispatch(clearMessageValue(roomId));
  };

export const getMessagesFB = () => async (dispatch, _, api) => {
  try {
     dispatch(getMessagesStart());
    const data = await api.getMessagesApi();

    const messages = {};

    data.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSusess(messages));
  } catch {
     dispatch(getMessagesError("Ошибка при получении сообщении"));
  }
};
