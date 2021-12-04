import React from "react";
import { mockMessages } from "../model";
import styled from "styled-components";

export const Chat: React.FC = () => {
  const userId = "01";
  return (
    <div>
      <ul>
        {mockMessages.map((message, key) => {
          return (
            <StyledDisplayUsername
              key={key}
              isCurrentUser={userId === message.userId}
            >
              <p>
                {"> "} {message.sender}
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
        ></textarea>
      </label>
    </div>
  );
};

const StyledDisplayUsername = styled.li<{ isCurrentUser: boolean }>`
  text-align: ${(props) => (props.isCurrentUser ? "right" : "left")};
`;
