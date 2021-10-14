import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { BasicList, MessageList } from "./components";
import "./global.css";



const dark = createTheme({});

const light = createTheme({
   theme: {
      color: "gold",
      backgroundColor: "#7f8082",
   },
});

ReactDOM.render(
   <ThemeProvider theme={light}>
      <BasicList />
      <MessageList />
   </ThemeProvider>,
   document.getElementById("root")
);
