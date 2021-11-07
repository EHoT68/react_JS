import { nanoid } from "nanoid";
import { db } from "./firebase";

export const getMessagesApi = () => db.ref("messages").get();

export const senMessageApi = (message, roomId) =>
  db
    .ref("messages")
    .child(roomId)
    .push({ ...message, id: nanoid() });
