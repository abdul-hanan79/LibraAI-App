import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

const ChatInput: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <Image
        //   resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7efbe7961921eb93373a15b722c66633c188d1a0dba1138faa0d8ac85c028b67?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
          style={styles.attachIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Write a message..."
          placeholderTextColor="#626262"
        />
      </View>
      <Image
        // resizeMode="auto"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ee9618fec80dfc96b2d22a84a434f039977c343db72f48271bfbfe0cdf3dabe?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&" }}
        style={styles.sendIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    marginTop: 56,
    paddingHorizontal: 21,
  },
  inputWrapper: {
    borderRadius: 33,
    backgroundColor: "rgba(229, 233, 249, 0.56)",
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    flexGrow: 1,
    padding: 12,
  },
  attachIcon: {
    width: 25,
    aspectRatio: 0.96,
    marginRight: 15,
  },
  textInput: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#626262",
    flex: 1,
  },
  sendIcon: {
    width: 50,
    aspectRatio: 1,
    marginLeft: 8,
  },
});

export default ChatInput;