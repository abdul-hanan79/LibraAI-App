import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

type MessageBubbleProps = {
  message: string;
  time: string;
  isOwnMessage: boolean;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  time,
  isOwnMessage,
}) => {
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
        <View>
          <View style={[styles.chatView]}>
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
          </View>
          <Text
            style={[
              styles.timeText,
              isOwnMessage ? styles.ownTimeText : styles.otherTimeText,
            ]}
          >
            {time}
          </Text>
        </View>
      ) : (
        <View>
          <View style={[styles.chatView]}>
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
            {time}
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

const styles = StyleSheet.create({
  bubbleContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 10,
    // overflow: "hidden",
    backgroundColor: "orange",
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
    backgroundColor: "green",
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
    // maxWidth: "100%",
    // width: "90%",
    flexShrink: 1,
    // font-size: 16px;
    lineHeight: 1.5,
    width: "30ch" /* Limits the width to approximately 30 characters */,
    overflow: "hidden" /* Hides any overflowing text */,
    textOverflow: "ellipsis" /* Adds ellipsis (...) to indicate more text */,
    whiteSpace: "nowrap" /* Keeps text in a single line */,
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
  chatView: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "red",
  },
});

export default MessageBubble;
