import { clearMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithThunk =
   (message, roomId) => (dispatch, getState) => {
      const c = dispatch(sendMessage(message, roomId));

      dispatch(clearMessageValue(roomId));

      console.log("c", c);

      // if (message.author === "User") {
      //   setTimeout(() => {
      //     dispatch(
      //       sendMessage({ author: "Bot", value: "Hello from bot" }, roomId)
      //     );
      //   }, 500);
      // }
   };
