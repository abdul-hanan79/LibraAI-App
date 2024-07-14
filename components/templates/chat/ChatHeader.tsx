import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

type ChatHeaderProps = {
  name: string;
  status: string;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, status }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {/* <Image
        //   resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9aa0bdf14a101562363c7ea02f21382417aee7202d72bcce76fb7b8bb0a2551b?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
          style={styles.backIcon}
        /> */}
        <Ionicons name="chevron-back-outline" size={28} color="black" />
        <View style={styles.userInfo}>
          <Image
            // resizeMode="auto"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114ea018ff3d756b48f33eb36b2146daaad153e2f6f9a30820e7c8ed5340868?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
            style={styles.userAvatar}
          />
          <View style={styles.userTextInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        </View>
      </View>
      <Image
        // resizeMode="auto"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a90b53bd153475e0df705cd150d6b1fb02298bcbdcb48d8e470c97172c2d124a?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
        style={styles.menuIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    flexDirection: 'row',
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    gap:2,
  },
  backIcon: {
    width: 16,
    height:16,
    // aspectRatio: 1.14,
    // marginRight: 18,
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
  },
  userAvatar: {
    borderRadius: 15,
    width: 30,
    aspectRatio: 1,
    marginRight: 9,
  },
  userTextInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    color: "#000",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
  },
  userStatus: {
    color: "#626262",
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    fontWeight: "400",
  },
  menuIcon: {
    width: 23,
    aspectRatio: 0.77,
  },
});

export default ChatHeader;