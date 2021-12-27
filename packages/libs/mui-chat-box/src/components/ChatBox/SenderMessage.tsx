import React from "react";
import { Message } from "./Message";

export function SenderMessage({
    avatar,
    children,
  }: {
    avatar: React.ReactNode;
    children: React.ReactNode;
  }) {
    return (
      <Message avatar={avatar} transmission="sender">
        {children}
      </Message>
    );
  }