import React, { useState } from "react";
import { ChatContext } from "../../Context/chat-context";
import PropTypes from "prop-types";
import ChatBubble from "react-chat-bubble";
import Button from "../../Componets/Button";
import sortUp from "../../assets/icons/sort-up.png";
import sortDown from "../../assets/icons/sort-down.png";
import { MESSAGE_TYPE } from "../../Constants";
import "./style.css";

const Chat = ({ userIcon }) => {
  const [isReversed, setIsReversed] = useState(false);

  const toggleReversed = () => {
    setIsReversed((isRev) => !isRev);
  };
  const formatMessage = (text) => ({
    type: MESSAGE_TYPE.SENDER,
    text,
    image: userIcon,
  });
  const sortMessages = (msgList) => [...msgList].reverse();
  const sortingIcon = isReversed ? sortDown : sortUp;

  return (
    <div className="Chat">
      <div className="buttonWrapper">
        <Button onClick={toggleReversed}>
          Sort
          <img className="sortIcon" src={sortingIcon} alt="Sort messages" />
        </Button>
      </div>
      <ChatContext.Consumer>
        {({ messages, handleSendMessage }) => {
          const sortedMessages = isReversed ? sortMessages(messages) : messages;
          const handleOnNewMessage = (message) => {
            const formattedMessage = formatMessage(message);
            handleSendMessage(formattedMessage);
          };
          return (
            <ChatBubble
              messages={sortedMessages}
              onNewMessage={handleOnNewMessage}
            />
          );
        }}
      </ChatContext.Consumer>
    </div>
  );
};

Chat.propTypes = { userIcon: PropTypes.string };
export default Chat;
