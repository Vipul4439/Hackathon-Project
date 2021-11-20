import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

// import LoginForm from "./components/LoginForm";
import Example from "./components/Example";

import Animation from "./components/Animation";

const App = () => {
  // if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    // <Animation />
    <Example />
    // <ChatEngine
    //   height="100vh"
    //   projectID="
    //   e383f89c-644b-414a-ac74-4e3de84b7ca5"
    //   userName={localStorage.getItem("username")}
    //   userSecret={localStorage.getItem("password")}
    //   renderChatFeed={(chatAppProps) => (
    //     <ChatFeed {...chatAppProps} />
    //   )}
    //   onNewMessage={() =>
    //     new Audio(
    //       "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
    //     ).play()
    //   }
    // />
  );
};

export default App;
