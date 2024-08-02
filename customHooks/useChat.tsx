import React, { useState } from "react";
import { Alert } from "react-native";

const useChat = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<any>([]);

  const handleSendMessage = async () => {
    try {
      setInput("");
      setLoading(true);
      const currentDateTime = new Date().toString(); // Save the current date and time
      // console.log("🚀 ~ handleSendMessage ~ myMessage:", myMessage);
      const myChatData = [
        ...messages,
        { senderId: "02", text: input, dateTime: currentDateTime },
      ];

      console.log("🚀 ~ handleSendMessage ~ myChatData:", myChatData);
      setMessages(myChatData);
      console.log("message before backend", messages);
      console.log("value of input", input);
      const request = await fetch(
        `https://libra-ai-backend.vercel.app/api/get-response?prompt=${input}`
      );
      const data = await request.json();
      if (!data.success) {
        Alert.alert("Error in geting response");
      }

      setMessages([...myChatData, { ...data.data, dateTime: currentDateTime }]);

      console.log("message after backend", messages);

      console.log("🚀 ~ handleSendMessage ~ data:", data);
      console.log("input");
    } catch (e: any) {
      console.log("🚀 ~ handleSendMessage ~ e:", e);
    } finally {
      setLoading(false);
    }
    console.log("🚀 ~ handleSendMessage ~ messages:", messages);
    console.log("🚀 ~ handleSendMessage ~ messages:", messages);
    console.log("🚀 ~ handleSendMessage ~ messages:", messages);
  };
  return {
    input,
    setInput,
    loading,
    setLoading,
    handleSendMessage,
    messages,
    setMessages,
  };
  
};

export default useChat;
