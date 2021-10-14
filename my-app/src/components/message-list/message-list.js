import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { Message } from "./message";
import styles from "./message-list.module.css";

const useStyles = makeStyles((ctx) => {
   return createStyles({
      input: {
         color: "#9a9fa1",
         padding: "10px 15px",
         marginBottom: "15px",
         width: "98%",
         fontSize: "15px",
         alignSelf: "center",
      },
      wrapper: {
         width: "100%",
         border: "1px solid grey",
         borderRadius: "20px",
         display: "flex",
         flexDirection: "column",
      },
   });
});

export const MessageList = () => {
   const s = useStyles();

   const [value, setValue] = useState("");
   const [messages, setMessages] = useState([
      { value: "Hello", author: "User" },
      { value: "Hello!", author: "Bot" },
   ]);

   const handleSendMessage = () => {
      if (value) {
         setMessages((state) => [...state, { value, author: "User" }]);
         setValue("");
      }
   };

   const handlePressInput = ({ code }) => {
      if (code === "Enter" && value) {
         handleSendMessage();
      }
   };


   useEffect(() => {
      const lastMessage = messages[messages.length - 1];
      let timerId = null;

      if (lastMessage?.author === "User") {
         timerId = setTimeout(() => {
            setMessages((state) => [
               ...state,
               { value: "Вас приветствует Bot", author: "Bot" },
            ]);
         }, 1500);
      }

      return () => {
         clearInterval(timerId);
      };
   }, [messages]);

   return (
      <div className={s.wrapper}>
         <div>
            {messages.map((message, id) => (
               <Message key={message.value} message={message} />
            ))}
         </div>

         <Input
            className={s.input}
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите сообщение..."
            fullWidth={true}
            onKeyPress={handlePressInput}
            endAdornment={
               <InputAdornment position="end">
                  {value && (
                     <Send className={styles.icon} onClick={handleSendMessage} />
                  )}
               </InputAdornment>
            }
         />
      </div>
   );
};
