import { useCallback, useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

export function MessageProvider({ children }) {
  const { roomId } = useParams();

  const [conversations, setConversations] = useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ]);
  const [messages, setMessages] = useState({
    room1: [{ value: "Room1", author: "Bot", id: nanoid() }],
    room2: [{ value: "Room2", author: "Bot", id: nanoid() }],
  });

  const updateConversationsValue = useCallback(
    (value = "") => {
      setConversations((conversations) => {
        return conversations.map((conversation) => {
          return conversation.title === roomId
            ? { ...conversation, value }
            : conversation;
        });
      });
    },
    [roomId]
  );

  const state = useMemo(() => {
    return {
      messages: messages[roomId] ?? [],
      value:
        conversations.find((conversation) => conversation.title === roomId)
          ?.value ?? "",
      conversations,
      allMessages: messages,
    };
  }, [roomId, messages, conversations]);

  const actions = useMemo(() => {
    return {
      handleChangeValue: (e) => {
        const value = e?.target?.value ?? "";

        updateConversationsValue(value);
      },
      createConversation: () => {
         const title = prompt("введите название беседы:");

         if (title) {
            setConversations((conversations) => [
            ...conversations,
            { title, value: "" },
         ]);
         }
      },
      sendMessage: (message) => {
        const newMessage = { ...message, id: new Date() };

        setMessages((messages) => {
          return {
            ...messages,
            [roomId]: [...(messages[roomId] ?? []), newMessage],
          };
        });

        updateConversationsValue();
      },
    };
  }, [roomId, updateConversationsValue]);

  useEffect(() => {
    const messagesByRoomId = messages[roomId] ?? [];
    const lastMessage = messagesByRoomId[messagesByRoomId.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        actions.sendMessage({ value: "Hello from Bot", author: "Bot" });
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages, roomId, actions]);

  return children([state, actions]);
}
