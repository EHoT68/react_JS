import { 
   getConversationsStart,
   getConversationsSecess,
   getConversationsError
} from "./actions";

export const getConversationsFB = () => async (dispatch, _, api) => {
  try {
     dispatch(getConversationsStart());
    const data = await api.getConversationsApi();

    const conversations = [];

    data.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSecess(conversations));
  } catch {
     dispatch(getConversationsError("Ошибка при получении чата"));
  }
};
