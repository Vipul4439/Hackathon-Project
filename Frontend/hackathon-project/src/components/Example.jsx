import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./ChatFeed";
import { useState } from "react";
import LoginForm from "./LoginForm";
import styles from "../Styles/Chatsystem.module.css";

export default function Example() {
  const [show, setShow] = useState(true);
  if (!localStorage.getItem("username")) return <LoginForm />;

  const handleSubmit = () => {
    setShow(false);
  };

  const handleClose = () => {
    setShow(true);
  };
  return (
    <div>
      {show ? (
        <div className={styles.chatsystem}>
          <img
            className={styles.imgdiv}
            src="Assets/CustomerSupport.png"
          />
          <button
            className={styles.buttonclass}
            onClick={handleSubmit}
          >
            <strong>Chat Support</strong>
          </button>
        </div>
      ) : (
        <div>
          <div className={styles.gobackbutton}>
            {/* <img
              className={styles.backarrow}
              src="Assets/Closefirst.png"
            /> */}
            <button className={styles.goback} onClick={handleClose}>
              <strong
                style={{
                  fontSize: "22px",
                  textAlign: "center",
                  marginLeft: "15px",
                }}
              >
                End Chat
              </strong>
            </button>
          </div>
          <ChatEngine
            height="100vh"
            projectID="
            e383f89c-644b-414a-ac74-4e3de84b7ca5"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => (
              <ChatFeed {...chatAppProps} />
            )}
            onNewMessage={() =>
              new Audio(
                "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
              ).play()
            }
          />
        </div>
      )}
    </div>
  );
}
