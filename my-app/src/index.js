import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ChatPage, ProfilePage, HomePage } from "./pages";
// import { TestRoute } from "./components/test-route";
import "./global.css";
import { store } from "./store";
import { Provider } from "react-redux";

const light = createTheme({
   theme: {
      color: "red",
   },
});

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <ThemeProvider theme={light}>
            <Switch>
               <Route path="/chat">
                  <ChatPage />
               </Route>

               <Route path="/profile">
                  <ProfilePage />
               </Route>

               <Route path="/">
                  <HomePage />
               </Route>

               <Route path="*">
                  <h1>404 page</h1>
                  <Link to="/chat">go to Chat</Link>
               </Route>
            </Switch>
         </ThemeProvider>
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);
