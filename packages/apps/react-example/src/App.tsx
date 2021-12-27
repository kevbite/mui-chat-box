import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Avatar, Badge, Container, styled } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import avatarImg1 from "./avatar-1.jpg";
import avatarImg2 from "./avatar-2.jpg";

const FooAvatar = () => (
  <StyledBadge
    overlap="circular"
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    variant="dot"
  >
    {" "}
    <Avatar src={avatarImg1} />
  </StyledBadge>
);
const BarAvatar = () => <Avatar src={avatarImg2} />;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function App() {
  const messages = [
    { from: "foo", content: "Hello there" },
    { from: "bar", content: "Hey how you doing?" },
    { from: "foo", content: "Good thanks, fancy meeting later?" },
    { from: "bar", content: "Sure thing" },
    { from: "bar", content: "I'm ready" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container maxWidth="sm">
          <ChatBox>
            {messages.map((m, i) =>
              m.from === "foo" ? (
                <ReceiverMessage key={i} avatar={<FooAvatar />}>
                  {m.content}
                </ReceiverMessage>
              ) : (
                <SenderMessage key={i} avatar={<BarAvatar />}>
                  {m.content}
                </SenderMessage>
              )
            )}
          </ChatBox>
        </Container>
      </header>
    </div>
  );
}

export default App;
