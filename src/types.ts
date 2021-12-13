export type Data = { message: string };

export type Message = {
  userId: string;
  message: string;
  sender: string;
};

export type DataToSend = {
  message: string;
  clientId: string;
  roomId: string;
  username: string;
  messageId: string;
};
