import { Grid } from "@mui/material";
import React from "react";
import { ChatText } from "./ChatText";
import { Transmission } from "./Transmission";

export function ChatBubble({
    transmission,
    children,
  }: {
    transmission: Transmission;
    children: React.ReactNode;
  }) {
    return (
      <Grid xs={8} item>
        <ChatText transmission={transmission}>{children}</ChatText>
      </Grid>
    );
  }