import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { databaseClient } from "@/appWrite-client/settings.config";
import { ID } from "appwrite";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const router = useRouter();
  const { doctorName } = router.query;

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        textmessage: inputText,
        messagetime: new Date().getTime().valueOf(),
        incoming: false,
      };

      const promise = databaseClient.createDocument(
        "64848d3a80e4ab2adf20",
        "64848d5a68c4d706f556",
        ID.unique(),
        {
          textmessage: newMessage.textmessage,
          messagetime: newMessage.messagetime,
        }
      );

      promise.then(
        function (response) {
          console.log(response, "sent a new msg"); // Success
        },
        function (error) {
          console.log(error, "failed to post msg"); // Failure
        }
      );

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <Head>
        <title>NEXTGEN Patients</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-end bg-[#00444d] text-white text:lg sm:text-3xl w-full min-h-screen gap-5">
          <div className="w-full flex bg-white text-black fixed top-0 h-[7.5vh] px-4">
            <p className="font-bold self-center">{doctorName}</p>
          </div>
          <div className="w-full flex flex-col h-[92.5vh] pb-20">
            <div
              id="chat-container"
              className="flex-grow w-full h-full p-4 overflow-auto"
            >
              {messages.map((message, index) => (
                <div
                  ref={messageRef}
                  id={message.messagetime}
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    message.incoming ? "bg-[#2A9988]" : "bg-[#0099ad]"
                  }`}
                >
                  {message.textmessage}
                </div>
              ))}
            </div>
            <div className="w-full flex p-4 border-t-2 fixed bottom-0 bg-[#00444d]">
              <input
                className="flex-grow border bg-gray-600 border-gray-300 p-2 rounded-lg mr-2"
                type="text"
                value={inputText}
                onKeyDown={handleKeyDown}
                onChange={handleInput}
                placeholder="Type your message"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
