import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ChatPage, ProfilePage, HomePage, GistsPage, SignUpPage,
   LoginPage } from "./pages";
import { sessionSelector, onAuthStateChanged } from "./store/session";
import { Header, PrivateRoute, PublicRoute } from "./components";
import "./global.css";
import { store, persistor } from "./store";
import { getMessagesFB } from "./store/messages";
import { getConversationsFB } from "./store/conversations";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const light = createTheme({
   theme: {
      color: "red",
   },
});

const App = () => {
   const session = useSelector(sessionSelector);
   const dispatch = useDispatch();
 
   useEffect(() => {
     dispatch(onAuthStateChanged());
   }, [dispatch]);
   useEffect(() => {
     dispatch(getMessagesFB());
   }, [dispatch]);
   useEffect(() => {
      dispatch(getConversationsFB());
    }, [dispatch]);
 
   const isAuth = !!session?.email;
 

   return (
      <>
        <Header session={session} />
  
        <Switch>
          <PrivateRoute path="/chat" isAuth={isAuth}>
            <ChatPage />
          </PrivateRoute>
          <PrivateRoute path="/profile" isAuth={isAuth}>
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute path="/gists" isAuth={isAuth}>
            <GistsPage />
          </PrivateRoute>
          
  
          <PublicRoute path="/login" isAuth={isAuth} to="/chat">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/sign-up" isAuth={isAuth} to="/chat">
            <SignUpPage />
          </PublicRoute>

         <Route path="/">
            <HomePage />
         </Route>
         <Route path="*">
            <h1>404 page</h1>
            <Link to="/chat">go to Chat</Link>
         </Route>
        </Switch>
      </>
    );
};

ReactDOM.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
         <ThemeProvider theme={light}>
         <App />
         </ThemeProvider>
      </BrowserRouter>
      </PersistGate>
   </Provider>,
   document.getElementById("root")
);
