import { Grid } from "@mui/material";
import React from "react";
import { ChatBubble } from "./ChatBubble";
import { MessageIcon } from "./MessageIcon";
import { Transmission } from "./Transmission";

export function Message({
    avatar,
    transmission,
    children,
  }: {
    avatar: React.ReactNode;
    transmission: Transmission;
    children: React.ReactNode;
  }) {
    return (
      <Grid
        container
        direction="row"
        flexDirection={transmission === "receiver" ? "row" : "row-reverse"}
        item
        xs={8}
      >
        <MessageIcon>{avatar}</MessageIcon>
        <ChatBubble transmission={transmission}>{children}</ChatBubble>
      </Grid>
    );
  }
  