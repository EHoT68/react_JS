import { useParams } from "react-router";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import {
   handleChangeMessageValue,
   messageValueSelector,
} from "../../store/conversations";
import { sendMessageWithThunk, messagesSelector } from "../../store/messages";
import { Message } from "./message";
import styles from "./message-list.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const useStyles = makeStyles((ctx) => {
   return createStyles({
      input: {
         color: "#9a9fa1",
         padding: "10px 15px",
         fontSize: "15px",
      },
   });
});

export const MessageList = () => {
   const s = useStyles();
   const { roomId } = useParams();

   const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);

   const dispatch = useDispatch();
   const value = useSelector(messageValue);

   const messages = useSelector(messagesSelector(roomId));

   const handleSendMessage = () => {
      if (value) {
         dispatch(sendMessageWithThunk({ author: "User", value }, roomId));
      }
   };

   const handlePressInput = ({ code }) => {
      if (code === "Enter") {
         handleSendMessage();
      }
   };

   return (
      <>
         <div>
            {messages.map((message, id) => (
               <Message key={message.value} message={message} />
            ))}
         </div>

         <Input
            className={s.input}
            value={value}
            onChange={(e) =>
               dispatch(handleChangeMessageValue(e.target.value, roomId))
            }
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
      </>
   );
};
