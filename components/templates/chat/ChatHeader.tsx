import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";
import { useColorSchemeValue } from "context/ColorSchemeContext";

type ChatHeaderProps = {
  name: string;
  status: string;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, status }) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const { isDarkMode, toggleColorScheme } = useColorSchemeValue();
  const styles = createStyles(isDarkMode);

  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {/* <Image
        //   resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9aa0bdf14a101562363c7ea02f21382417aee7202d72bcce76fb7b8bb0a2551b?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
          style={styles.backIcon}
        /> */}
        <Ionicons
          name="chevron-back-outline"
          size={28}
          color={isDarkMode ? "white" : "black"}
        />
        <View style={styles.userInfo}>
          <Image
            // resizeMode="auto"
            source={require("assets/blackLogo.png")}
            style={styles.userAvatar}
          />
          <View style={styles.userTextInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        </View>
      </View>
      {/* <Image
        // resizeMode="auto"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a90b53bd153475e0df705cd150d6b1fb02298bcbdcb48d8e470c97172c2d124a?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
        style={styles.menuIcon}
      /> */}
      <CustomSwitch
        onValueChange={toggleColorScheme}
        value={isDarkMode}
        // isEnabled={isEnabled}
      />
    </View>
  );
};

const createStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    headerContainer: {
      backgroundColor: isDarkMode ? "#0000" : "rgba(255, 255, 255, 1)",
      borderColor: isDarkMode ? "#626262" : "rgba(0, 0, 0, 0.04)",
      borderStyle: "solid",
      borderWidth: 1,
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
      paddingBottom: 0,
      paddingTop: 0,
      flexDirection: "row",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: 2,
    },
    backIcon: {
      width: 16,
      height: 16,
      // aspectRatio: 1.14,
      // marginRight: 18,
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    userAvatar: {
      borderRadius: 30,
      width: 38,
      aspectRatio: 1,
      marginRight: 9,
      borderWidth: 0.5,
      borderColor: isDarkMode ? "#fff" : "#000",
    },
    userTextInfo: {
      display: "flex",
      flexDirection: "column",
    },
    userName: {
      color: isDarkMode ? "#fff" : "#000",
      fontFamily: "Poppins, sans-serif",
      fontSize: 18,
      fontWeight: "500",
    },
    userStatus: {
      color: isDarkMode ? "#fff" : "#626262",
      fontFamily: "Poppins, sans-serif",
      fontSize: 14,
      fontWeight: "400",
    },
    menuIcon: {
      width: 23,
      aspectRatio: 0.77,
    },
  });
};

const CustomSwitch = styled(Switch).attrs((props: any) => ({
  trackColor: { false: "#767577", true: "#81b0ff" },
  thumbColor: props.isEnabled ? "#f5dd4b" : "#f4f3f4",
  ios_backgroundColor: "#3e3e3e",
}))`
  margin: 10px;
`;
export default ChatHeader;
