import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { getGistsApi,
   searchGistsByUserNameApi,
   getMessagesApi,
   senMessageApi,
   getConversationsApi,
} from "../api";
import { gistsReducer } from "./gists";
import { conversationsReducer } from "./conversations";
import { sessionReducer } from "./session";
import { messagesReducer } from "./messages";
import {
   logger,
   botSendMessage,
   crashReporter,
   timeScheduler,
} from "./midelwares";

const persistConfig = {
   key: "root",
   storage,
   blacklist: ["messages"],
   whitelist: ["profile", "conversations"],
};

export const reducer = combineReducers({
   profile: profileReducer,
   conversations: conversationsReducer,
   messages: messagesReducer,
   gists: gistsReducer,
   session: sessionReducer,
 });
 
 const persistreducer = persistReducer(persistConfig, reducer);
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 export const store = createStore(
   persistreducer,
   composeEnhancers(
     applyMiddleware(
       timeScheduler,
       crashReporter,
       thunk.withExtraArgument({
         getGistsApi,
         searchGistsByUserNameApi,
         getMessagesApi,
         senMessageApi,
         getConversationsApi,
       }),
       logger,
       botSendMessage
     )
   )
 );
 
 export const persistor = persistStore(store);
 