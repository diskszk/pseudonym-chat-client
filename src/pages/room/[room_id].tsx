import { NextPage } from "next";
import { Chat } from "../../partial/Chat";
import { Layout } from "../../shared";

const RoomPage: NextPage = () => {
  return (
    <Layout>
      <h1>Welcome!</h1>

      <div>
        <Chat />
      </div>
    </Layout>
  );
};

export default RoomPage;
