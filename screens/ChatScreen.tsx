import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ChatHeader from "../components/templates/chat/ChatHeader";
import MessageBubble from "../components/templates/chat/MessageBubble";
import ChatInput from "../components/templates/forms/ChatInput";
import useChat from "customHooks/useChat";
const ChatScreen: React.FC = () => {
  const {
    input,
    setInput,
    loading,
    setLoading,
    handleSendMessage,
    messages,
    setMessages,
  } = useChat();
  console.log("🚀 ~ loading:", loading);
  // console.log("🚀 ~ input:", typeof input);
  console.log("messages in my cojmponn", messages);
  return (
    <View style={styles.container}>
      <ChatHeader name="Libra AI" status="Online" />
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg: any, index: number) => (
          <MessageBubble
            key={index}
            message={msg.text}
            time={"4:00 PM"}
            isOwnMessage={msg.senderId === "02"}
          />
        ))}
      </ScrollView>
      <ChatInput
        value={input}
        setValue={setInput}
        loading={loading}
        handleSendMessage={handleSendMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    display: "flex",
    // maxWidth: 480,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    // margin: "0 auto",
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ChatScreen;
