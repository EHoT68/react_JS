import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { conversationsSelector } from "../../store/conversations";
import { Chat } from "./chat";
import { useSelector } from "react-redux";

export const ChatList = () => {
   const params = useParams();
   const conversations = useSelector(conversationsSelector);


   return (
      <List component="nav">
         {conversations.map((chat, index) => (
            <Link key={index} to={`/chat/${chat.title}`}>
               <Chat
                  title={chat.title}
                  selected={chat.title === params.roomId}
                  {...chat}
               />
            </Link>
         ))}
      </List>
   );
};
