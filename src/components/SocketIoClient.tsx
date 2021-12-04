import React from "react";
import { io } from "socket.io-client";
import { Data } from "../types";

export const SocketIoClient: React.FC = () => {
  const socket = io("localhost:5000");

  const clientId = "1";
  const roomId = "R";

  console.log(`clientId: ${clientId}  roomId: ${roomId}`);

  socket.on("connect", () => {
    console.log("connect");
  });

  // 受信
  socket.on("server_to_client", (data: object) => {
    console.log("data: ", JSON.stringify(data));
  });

  // 送信
  socket.emit("join_to_room", { clientId, roomId });

  return <div>socket</div>;
};
