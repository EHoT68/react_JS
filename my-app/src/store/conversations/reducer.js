import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCESS,
  GET_CONVERSATIONS_ERROR
} from "./types";

const initialState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,
};

const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation;
  });

export const conversationsReducer = (state = initialState, action) => {
   switch (action.type) {
      case HANDLE_CHANGE_MESSAGE_VALUE:
         return {
            ...state,
            conversations: updateConversations(
               state,
               action.payload.roomId,
               action.payload.value
            ),
         };
      case CREATE_CONVERSATION:
         return {
            ...state,
            conversations: [
               ...state.conversations,
               { title: action.payload, value: "" },
            ],
         };
      case CLEAR_MESSAGE_VALUE:
         return {
            ...state,
            conversations: updateConversations(state, action.payload, ""),
         };
      case GET_CONVERSATIONS_START:
         return {
            ...state,
            conversationsLoading: true,
         };
      case GET_CONVERSATIONS_SUCESS:
         let conversations = {};
            action.payload.forEach((snapshot)=>{
               conversations = { ...conversations, [snapshot.key]: snapshot.val()}
            })
            return {...state, conversationsLoading: false, conversations: [...Object.entries(conversations)]};
      case GET_CONVERSATIONS_ERROR:
         return {
            ...state,
            conversationsLoading: false,
            conversationsError: action.payload,
         };
         
      default:
         return state;
   }
};
