import React from "react";
import { Message } from "./Message";

export function ReceiverMessage({
    avatar,
    children,
  }: {
    avatar: React.ReactNode;
    children: React.ReactNode;
  }) {
    return (
      <Message avatar={avatar} transmission="receiver">
        {children}
      </Message>
    );
  }
  