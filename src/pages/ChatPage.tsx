import React from "react";
import { Main } from "../components/wrappers/Main";
import { ChannelsContainer } from "../containers/channels";
import { ChatContainer } from "../containers/chat";
import { UsersContainer } from "../containers/users";

export const Chat = () => {
  return (
    <Main>
      <UsersContainer />
      <ChatContainer />
      <ChannelsContainer />
    </Main>
  );
};
