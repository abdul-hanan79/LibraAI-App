import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ChatHeader from "../components/templates/chat/ChatHeader";
import MessageBubble from "../components/templates/chat/MessageBubble";
import ChatInput from "../components/templates/forms/ChatInput";
import useChat from "customHooks/useChat";
import { Button } from "tamagui";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";
// import { LinearGradient } from "expo-linear-gradient";
import { useColorSchemeValue } from "context/ColorSchemeContext";

const ChatScreen: React.FC = () => {
  const {
    input,
    setInput,
    loading,
    setLoading,
    handleSendMessage,
    messages,
    // setMessages,
  } = useChat();
  console.log("🚀 ~ loading:", loading);
  // console.log("🚀 ~ loadng in chat screen", loading);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const handleScrollToDown = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };
  useEffect(() => {
    handleScrollToDown();
  }, [messages]);
  const MyButton = styled(Button)`
    background-color: #7426ef;
    /* background: linear-gradient(to right, #7426ef, #3372e3); */
    position: absolute;
    right: 10;
    bottom: 100;
  `;
  // const GradientButton = styled(LinearGradient).attrs({
  //   colors: ["#7426ef", "#3372e3"],
  //   start: { x: 0, y: 0 },
  //   end: { x: 1, y: 0 },
  // })`
  //   position: absolute;
  //   right: 10px;
  //   bottom: 100px;
  //   padding: 15px 30px;
  //   border-radius: 25px;
  // `;
  const { isDarkMode, toggleColorScheme } = useColorSchemeValue();
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <ChatHeader name="Libra AI" status="Online" />
      <ScrollView style={styles.messageContainer} ref={scrollViewRef}>
        {messages.map((msg: any, index: number) => (
          <MessageBubble
            key={index}
            index={index}
            length={messages.length}
            message={msg.text}
            time={msg.dateTime}
            isOwnMessage={msg.senderId === "02"}
            loading={loading}
          />
        ))}
      </ScrollView>
      <ChatInput
        value={input}
        setValue={setInput}
        loading={loading}
        handleSendMessage={handleSendMessage}
      />
      {/* <GradientButton> */}
      <MyButton
        onPress={handleScrollToDown}
        icon={<Ionicons name="chevron-down-outline" size={20} color="white" />}
        circular={true}
      ></MyButton>
      {/* </GradientButton> */}
    </View>
  );
};
const createStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? "#000" : "#ffff",
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
      marginBottom: 15,
    },
  });
};

export default ChatScreen;
