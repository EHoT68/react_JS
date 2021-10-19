import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = ({ createConversation }) => {

  return ( 
     <div className={styles.header}>
            <Link className={styles.headerProf} to="/">
            <ListItemIcon>
               <AccountCircle fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary="Profile" />
            </Link>
            <button className={styles.headerProf} onClick={createConversation}>
            <ListItemIcon>
               <AddCircleOutline fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary="New Chat" />
            </button>
      </div>
  );
};
