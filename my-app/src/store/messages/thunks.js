import { clearMessageValue } from "../conversations";
import { sendMessage, getMessagesStart, getMessagesSusess, getMessagesError} from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => async (dispatch, _, { sendMessageApi }) => {
    
    try {
      await sendMessageApi(roomId, message)

      dispatch(sendMessage(message, roomId))
      dispatch(clearMessageValue(roomId))
    } catch (e) {
      console.log("error", e)
    }
    // if (message.author === "User") {
    //   setTimeout(() => {
    //     dispatch(
    //       sendMessage({ author: "Bot", value: "Hello from bot" }, roomId)
    //     );
    //   }, 500);
    // }
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
