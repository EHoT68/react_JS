import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { createConversation } from "../../store/conversations";
import { useDispatch } from "react-redux";
import { firebaseApp } from "../../api/firebase";
import styles from "./header.module.css";


const exist = () => {
   firebaseApp.auth().signOut();
 };

export const Header = ({ session }) => {
   const isAuth = !!session?.email;
   const dispatch = useDispatch();

   const createConversationWithName = () => {
      const title = prompt("введите название беседы:");

      if (title) {
         dispatch(createConversation(title));
      }
   };

   return (
      <div className={styles.header}>
         
         {isAuth && (
        <>
        <div className={styles.loginMenu}>
           

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
         
         <div className={styles.loginMenu}>
         <Link className={styles.headerProf} to="/profile">
            <ListItemIcon>
               <AccountCircle fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary={session?.email ?? ""} />
         </Link>
            <button className={styles.headerProf} onClick={exist}>
            <ListItemText className={styles.text} primary="Exit" />
            </button>
         </div>
         
         </>
      )}
      {!isAuth && (
        <>
        <div className={styles.loginMenu}>
           <Link className={styles.headerProf} to="/login">
            <ListItemText className={styles.text} primary="Login" />
         </Link>
         <Link className={styles.headerProf} to="/sign-up">
            <ListItemText className={styles.text} primary="Sign up" />
         </Link>
        </div>
         </>
      )}
      </div>
   );
};
