import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import './home.css';


export function HomePage() {
return (
   <Switch>
      <Route path="/">
         <div className={"home-padge"}>
            <h1>Домашная страница</h1>
            <div className={"chat-link"}>
            <Link to="/chat">-- Чатик --</Link>
            </div>
         </div>
      </Route>
   </Switch>
   
);

}