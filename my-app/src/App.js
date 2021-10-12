import React, {
   useEffect,
   useState,
} from 'react';
import './App.css';
import { Message } from './Messages';


export function App(props) {
   const [messageList, setMessageList] = useState([
      { author: "Bot", message: "Hello !" },
      { author: "SuperBot", message: "Hello World!" }
   ]);
   const [inputValue, setInputValue] = useState("");



   useEffect(() => {
      console.log("useEffect");
      const i = [messageList.length - 1];

      if (messageList[i].author === `You`) {
         setTimeout(() => {
            setMessageList(messageList => [...messageList, messageList = { author: `Admin`, message: `hi` }]);
            console.log("useEffect123");
         }, 1500);
      }
   }, [messageList]);

   const cb = () => {
      setMessageList(messageList => [...messageList, messageList = { author: `You`, message: `${inputValue}` }]);
      setInputValue('');
   };


   return <div className="App">
      {messageList.map((message) => <h1>{`author: ${message.author} message: ${message.message}`}</h1>)}
      <div>
         <input
            placeholder="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <button onClick={cb}>
            send
         </button>
      </div>
      <Message nam={props.author}></Message>
   </div >;
}


