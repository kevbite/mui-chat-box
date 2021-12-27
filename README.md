# mui-chat-box

React component for creating a simple chat box.

[![mui-chat-box preview](/preview.gif)](https://kevsoft.net/mui-chat-box/)

## Getting Started

### Installing Package

**mui-chat-box** can be installed directly via npm by executing the following command:

```powershell
npm install mui-chat-box
```

## Usage

```jsx
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";

export const App = () => (<ChatBox>
    <ReceiverMessage key={i} avatar={<Avatar src="/static/images/avatar/1.jpg" />}>
        Hello how are you?
    </ReceiverMessage>
    <SenderMessage key={i} avatar={<Avatar src="/static/images/avatar/2.jpg" />}>
        I'm good thanks you?
    </SenderMessage>
    <ReceiverMessage key={i} avatar={<Avatar src="/static/images/avatar/1.jpg" />}>
       I'm good too!
    </ReceiverMessage>
</ChatBox>)
```

## Samples

The [react-example](packages/app/react-example) folder contains an example of how you could use the mui-chat-box.

## Contributing

1. Issue
1. Fork
1. Hack!
1. Pull Request
