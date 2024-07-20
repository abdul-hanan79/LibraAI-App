import { useColorSchemeValue } from "context/ColorSchemeContext";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Markdown from "react-native-markdown-display";

import { TypingAnimation } from "react-native-typing-animation";
type MessageBubbleProps = {
  message: string;
  time: string;
  isOwnMessage: boolean;
  loading: boolean;
  index: number;
  length: number;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  time,
  isOwnMessage,
  loading,
  index,
  length,
}) => {
  const formatDateTime = (dateTimeStr: string) => {
    const date = new Date(dateTimeStr);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;

    const timeStr = `${hours}:${minutesStr} ${ampm}`;
    const dateStr = date.toLocaleDateString(); // Use desired date format

    return `${dateStr} ${timeStr}`;
  };
  const { isDarkMode, toggleColorScheme } = useColorSchemeValue();
  const styles = createStyles(isDarkMode);
  console.log("loadng in bubble", loading);
  return (
    <View
      style={[
        styles.bubbleContainer,
        isOwnMessage
          ? styles.ownMessageContainer
          : styles.otherMessageContainer,
      ]}
    >
      {!isOwnMessage ? (
        <View style={[styles.mainTextView]}>
          <View
            style={[
              styles.chatView,
              { alignSelf: isOwnMessage ? "flex-end" : "flex-start" },
            ]}
          >
            <Image
              //   resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
              }}
              style={styles.avatar}
            />
            <View
              style={[
                styles.messageContent,
                isOwnMessage
                  ? styles.ownMessageContent
                  : styles.otherMessageContent,
              ]}
            >
              <Markdown style={markdownSheet}>{message}</Markdown>
              {/* <Text
                style={[
                  styles.messageText,
                  isOwnMessage
                    ? styles.ownMessageText
                    : styles.otherMessageText,
                ]}
              >
                {message}
              </Text> */}
            </View>
          </View>
          <Text
            style={[
              styles.timeText,
              isOwnMessage ? styles.ownTimeText : styles.otherTimeText,
            ]}
          >
            {formatDateTime(time)}
          </Text>
          {loading && index === length - 1 && (
            <View style={[styles.chatView, { marginTop: 15 }]}>
              <Image
                //   resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
                }}
                style={styles.avatar}
              />
              <View
                style={[
                  styles.messageContent,
                  styles.otherMessageContent,
                  { width: "15%" },
                ]}
              >
                <TypingAnimation
                  dotColor="black"
                  dotMargin={7}
                  dotAmplitude={3}
                  dotSpeed={0.1}
                  dotRadius={2.7}
                  dotX={12}
                  dotY={6}
                />
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={[styles.mainTextView]}>
          <View
            style={[
              styles.chatView,
              { alignSelf: isOwnMessage ? "flex-end" : "flex-start" },
            ]}
          >
            <View
              style={[
                styles.messageContent,
                isOwnMessage
                  ? styles.ownMessageContent
                  : styles.otherMessageContent,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  isOwnMessage
                    ? styles.ownMessageText
                    : styles.otherMessageText,
                ]}
              >
                {message}
              </Text>
            </View>
            <Image
              //   resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
              }}
              style={styles.avatar}
            />
          </View>
          <Text
            style={[
              styles.timeText,
              isOwnMessage ? styles.ownTimeText : styles.otherTimeText,
            ]}
          >
            {formatDateTime(time)}
          </Text>
        </View>
      )}
      {/* {!isOwnMessage && (
        <Image
        //   resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
          style={styles.avatar}
        />
      )}
      <View style={[styles.messageContent, isOwnMessage ? styles.ownMessageContent : styles.otherMessageContent]}>
        <Text style={[styles.messageText, isOwnMessage ? styles.ownMessageText : styles.otherMessageText]}>
          {message}
        </Text>
      </View>
      <Text style={[styles.timeText, isOwnMessage ? styles.ownTimeText : styles.otherTimeText]}>
        {time}
      </Text>
      {isOwnMessage && (
        <Image
        //   resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
          style={styles.avatar}
        />
      )} */}
    </View>
  );
};

const createStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    bubbleContainer: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      // alignItems: "stretch",
      marginBottom: 10,
      // overflow: "hidden",
      // backgroundColor: "orange",
    },
    mainTextView: {
      // backgroundColor: "red",
    },
    ownMessageContainer: {
      justifyContent: "flex-end",
    },
    otherMessageContainer: {
      justifyContent: "flex-start",
    },
    avatar: {
      borderRadius: 15,
      width: 30,
      height: 30,
      aspectRatio: 1,
      marginTop: 7,
    },
    messageContent: {
      borderRadius: 10,
      padding: 10,
      maxWidth: "80%",
      // backgroundColor: "green",
    },
    ownMessageContent: {
      backgroundColor: "#1D264D",
      borderBottomRightRadius: 0,
    },
    otherMessageContent: {
      backgroundColor: isDarkMode ? "#2C3539" : "#F3F5FE",
      borderBottomLeftRadius: 0,
    },
    messageText: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 12,
      fontWeight: "400",
      // maxWidth: "100%",
      // width: "90%",
      flexShrink: 1,
      // font-size: 16px;
      // lineHeight: 1.5,
      // width: "30ch" /* Limits the width to approximately 30 characters */,
      overflow: "hidden" /* Hides any overflowing text */,
      // textOverflow: "ellipsis" /* Adds ellipsis (...) to indicate more text */,
      // whiteSpace: "nowrap" /* Keeps text in a single line */,
    },
    ownMessageText: {
      color: "#FFF",
    },
    otherMessageText: {
      color: isDarkMode ? "#Fff" : "#000",
      fontFamily: "Poppins, sans-serif",
      fontSize: 6,
      fontWeight: "400",
      // maxWidth: "100%",
      // width: "90%",
      flexShrink: 1,
      // font-size: 16px;
      // lineHeight: 1.5,
      // width: "30ch" /* Limits the width to approximately 30 characters */,
      overflow: "hidden" /* Hides any overflowing text */,
      // textOverflow: "ellipsis" /* Adds ellipsis (...) to indicate more text */,
      // whiteSpace: "nowrap" /* Keeps text in a single line */,
    },
    timeText: {
      color: "#626262",
      fontFamily: "Poppins, sans-serif",
      fontSize: 9,
      fontWeight: "400",
      marginTop: 6,
    },
    ownTimeText: {
      alignSelf: "flex-end",
      marginRight: 38,
    },
    otherTimeText: {
      alignSelf: "flex-start",
      marginLeft: 38,
    },
    chatView: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      // backgroundColor: "red",
    },
    typingAnimationContainer: {
      alignSelf: "flex-start",
      marginBottom: 10,
    },
  });
};
const markdownSheet = StyleSheet.create({
  heading1: {
    fontSize: 18,
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  heading2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heading3: {
    fontSize: 14,
  },
  heading4: {
    fontSize: 12,
  },
  heading5: {
    fontSize: 10,
  },
  heading6: {
    fontSize: 8,
  },
});
export default MessageBubble;
