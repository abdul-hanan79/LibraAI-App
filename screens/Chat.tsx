import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ChatHeader from "../components/templates/chat/ChatHeader";
import MessageBubble from "../components/templates/chat/MessageBubble";
import ChatInput from "../components/templates/forms/ChatInput";

const ChatScreen: React.FC = () => {
  const messages = [
    { id: 1, message: "Hello! What's up?", time: "14:03", isOwnMessage: false },
    {
      id: 2,
      message: "I am great as well! Thanks",
      time: "14:03",
      isOwnMessage: true,
    },
    {
      id: 3,
      message:
        "Nowadays i am focusing on study this semester to get good marks",
      time: "14:03",
      isOwnMessage: false,
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      time: "14:03",
      isOwnMessage: true,
    },
    {
      id: 5,
      message: "I am great as well! Thanks",
      time: "14:03",
      isOwnMessage: false,
    },
    {
      id: 6,
      message:
        "Nowadays i am focusing on study this semester to get good marks",
      time: "14:03",
      isOwnMessage: true,
    },
  ];

  return (
    <View style={styles.container}>
      <ChatHeader name="Maansvi Goyal" status="Online" />
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg.message}
            time={msg.time}
            isOwnMessage={msg.isOwnMessage}
          />
        ))}
      </ScrollView>
      <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    // margin: "0 auto",
  },
  messageContainer: {
    flex: 1,
    padding: 21,
  },
});

export default ChatScreen;
