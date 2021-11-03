import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { createConversation } from "../../store/conversations";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";


export const Header = () => {
   const dispatch = useDispatch();

   const createConversationWithName = () => {
      const title = prompt("введите название беседы:");

      if (title) {
         dispatch(createConversation(title));
      }
   };

   return (
      <div className={styles.header}>
         <Link className={styles.headerProf} to="/profile">
            <ListItemIcon>
               <AccountCircle fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary="Profile" />
         </Link>

         <button className={styles.headerProf} onClick={createConversationWithName}>
            <ListItemIcon>
               <AddCircleOutline fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary="New Chat" />
         </button>
         <Link className={styles.headerProf} to="/gists">
         <ListItemText className={styles.text} primary="Gists" />
         </Link>
         <Link className={styles.headerProf} to="/chat">
            <ListItemText className={styles.text} primary="Chats" />
         </Link>
      </div>
   );
};
