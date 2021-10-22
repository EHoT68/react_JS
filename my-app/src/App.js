import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ListItemIcon } from "@mui/material";
import { AccountCircle, HighlightOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
      <div className={"profile-box"}>
         <div className={"App"}>
            <Link className={"close-prof"} to="/chat">
            <ListItemIcon>
               <HighlightOff className={"icon"} />
            </ListItemIcon>
            </Link>
            <ListItemIcon>
               <AccountCircle fontSize="large" className={"icon"} />
            </ListItemIcon>
            <h1 className={"prof-text"}>Name: {profile.name} </h1>
            <h1 className={"prof-text"}>Country: {profile.country} </h1>
            <h1 className={"prof-text"}>Age: {count} </h1>
            <button className={"but-age"} onClick={() => dispatch({ type: "INCREMENT" })}>increment age</button>
            <button className={"but-age"} onClick={() => dispatch({ type: "DECREMENT" })}>decrement age</button>
         </div>
      </div>
    
  );
}






