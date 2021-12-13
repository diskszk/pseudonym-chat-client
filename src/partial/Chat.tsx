import React, { useState } from "react";
import styled from "styled-components";

export const Chat: React.FC = () => {
  const userId = "01";
  const [message, setMessage] = useState("");

  type MSG = { message: string };
  const [messages, setMessages] = useState<MSG[]>([]);

  // TODO: コンポーネントを分割する
  return (
    <div className="flex flex-col w-1/3 justify-center mx-auto">
      <ul>
        {messages.map((message, key) => {
          return (
            <StyledDisplayUsername
              key={key}
              isCurrentUser={userId === message.message}
            >
              <p>
                {"> "} {message.message}
              </p>
              <p>{message.message}</p>
            </StyledDisplayUsername>
          );
        })}
      </ul>

      <hr />
      <label className="block">
        <span className="text-gray-700">Textarea</span>
        <textarea
          className="form-textarea mt-1 block w-full"
          rows={3}
          placeholder="Enter some long form content."
          onChange={() => {}}
          value={message}
        ></textarea>
        <button onClick={() => {}}>送信</button>
      </label>
    </div>
  );
};

const StyledDisplayUsername = styled.li<{ isCurrentUser: boolean }>`
  text-align: ${(props) => (props.isCurrentUser ? "right" : "left")};
`;
