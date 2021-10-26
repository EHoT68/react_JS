import { SEND_MESSAGE } from "./types";

export const sendMessage = (message, roomId) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
    meta: {
      delay: 500,
    },
  };
};
