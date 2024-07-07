import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

type MessageBubbleProps = {
  message: string;
  time: string;
  isOwnMessage: boolean;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, time, isOwnMessage }) => {
  return (
    <View style={[styles.bubbleContainer, isOwnMessage ? styles.ownMessageContainer : styles.otherMessageContainer]}>
      {!isOwnMessage && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 10,
  },
  ownMessageContainer: {
    alignItems: "flex-end",
  },
  otherMessageContainer: {
    alignItems: "flex-start",
  },
  avatar: {
    borderRadius: 15,
    width: 30,
    aspectRatio: 1,
    marginTop: 7,
  },
  messageContent: {
    borderRadius: 10,
    padding: 13,
    maxWidth: "80%",
  },
  ownMessageContent: {
    backgroundColor: "#1D264D",
    borderBottomRightRadius: 0,
  },
  otherMessageContent: {
    backgroundColor: "#F3F5FE",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    fontWeight: "400",
  },
  ownMessageText: {
    color: "#FFF",
  },
  otherMessageText: {
    color: "#000",
  },
  timeText: {
    color: "#626262",
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
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
});

export default MessageBubble;