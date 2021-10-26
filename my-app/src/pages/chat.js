import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Header, MessageList, MainTemplate, ChatList } from "../components";

export function ChatPage() {
   const { push } = useHistory();

   useEffect(() => {
      const listenExistChat = ({ code }) => {
         if (code === "Escape") {
            push("/chat");
         }
      };

      document.addEventListener("keydown", listenExistChat);

      return () => {
         document.removeEventListener("keydown", listenExistChat);
      };
   }, [push]);

   return (
      <Switch>
         <Route path={["/chat/:roomId", "/chat"]}>
            <MainTemplate chats={<ChatList />} header={<Header />}>
               <Route path="/chat/:roomId">
                  <MessageList />
               </Route>
               <Route exact={true} path="/chat">
                  <h1>выберите сообщение</h1>
               </Route>
            </MainTemplate>
         </Route>
         <Route path="*">
            <h1>такого чата нет</h1>
         </Route>
      </Switch>
   );
}
