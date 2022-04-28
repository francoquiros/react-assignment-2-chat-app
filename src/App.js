import "./App.css";
import Chat from "./Containers/Chat";
import { ChatContext } from "./Context/chat-context";
import React, { useState } from "react";
import userIcon0 from "./assets/icons/user-0.png";
import userIcon1 from "./assets/icons/user-1.png";
import { MESSAGE_TYPE } from "./Constants";

const App = () => {
  const initialChat = [
    {
      type: MESSAGE_TYPE.RECEIVER,
      image: userIcon1,
      text: "Hello! How are you?",
    },
  ];
  const [messages, setMessages] = useState(initialChat);

  const handleSendMessage = (newMessage) =>
    setMessages((msgList) => [...msgList, newMessage]);

  return (
    <ChatContext.Provider value={{ messages, handleSendMessage }}>
      <div className="App">
        <Chat userIcon={userIcon0} />
      </div>
    </ChatContext.Provider>
  );
};

export default App;
