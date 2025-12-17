import React, { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // This script loads the Flowise chatbot
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.onload = () => {
      // @ts-ignore
      if (window.Chatbot) {
        // @ts-ignore
        window.Chatbot.init({
          chatflowid: "f7aa8652-2a28-47c6-8093-a411a50a4b07",
          apiHost: "https://cloud.flowiseai.com",
          theme: {
            button: {
              backgroundColor: "#14b8a6", // teal-500
              right: 20,
              bottom: 20,
              size: "medium",
              iconColor: "white",
            },
            chatWindow: {
              showPoweredBy: false,
              welcomeMessage:
                "Hi there! I'm your AI assistant. Ask me anything about this portfolio.",
              backgroundColor: "#ffffff",
              height: 600,
              width: 350,
              botMessage: {
                backgroundColor: "#f0fdfa", // teal-50
                textColor: "#303235",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
              },
              userMessage: {
                backgroundColor: "#14b8a6", // teal-500
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Type your question",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#14b8a6", // teal-500
              },
            },
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chatbot is rendered by the script outside the React tree
};

export default Chatbot;
