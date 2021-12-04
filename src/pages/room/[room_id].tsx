import { NextPage } from "next";
import { Chat } from "../../components/Chat";

const RoomPage: NextPage = () => {
  return (
    <div className="">
      <h1>Welcome!</h1>

      <div className="max-w-6xl">
        <Chat />
      </div>
    </div>
  );
};

export default RoomPage;
