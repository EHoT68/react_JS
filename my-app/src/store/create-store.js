import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "./reducer";


const reducer = (state = { count: 23 }, action) => {
   switch (action.type) {
     case "INCREMENT":
       return { ...state, count: state.count + 1 };
     case "DECREMENT":
       return { ...state, count: state.count - 1 };
     default:
       return state;
   }
 };
 
 export const store = createStore(
   combineReducers({
     counter: reducer,
     profile: ProfileReducer
   })
 );
 