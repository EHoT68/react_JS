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
   updateConversationValueApi
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

const persistreducer = persistReducer(
   persistConfig,
   combineReducers({
      profile: profileReducer,
      conversations: conversationsReducer,
      gists: gistsReducer,
      messages: messagesReducer,
      session: sessionReducer,
   })
);

export const store = createStore(
   persistreducer,
   compose(
      applyMiddleware(
         timeScheduler,
         crashReporter,
         thunk.withExtraArgument({ getGistsApi,
         searchGistsByUserNameApi,
         getMessagesApi,
         senMessageApi,
         getConversationsApi,
         updateConversationValueApi
         }),
         logger,
         botSendMessage
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export const persistor = persistStore(store);
