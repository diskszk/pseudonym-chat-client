import socketIoClient, { io } from "socket.io-client";

const socket = io(`http:localhost:5000`);

export function socktio() {
  socket.on("connect", () => {
    console.log("connect");
  });
}

// socket.on("XXX", (data: { message: string }) => {
//   console.log(`type: ${typeof data}  data: ${data.message}`);
// });
