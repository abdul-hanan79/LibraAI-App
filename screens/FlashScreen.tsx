import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
} from "react-native";

function FlashScreen({ navigation }: any) {
  const goToChatScreen = () => {
    setTimeout(() => {
      console.log("working");
      navigation.navigate("Chat");
    }, 2000);
  };
  goToChatScreen();
  return (
    <View style={styles.view1}>
      {/* <Image
        // resizeMode="cover"
        fitContent
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9079cb828bd22ac21243314ad40f0a63dcd35080d09c481695c38dd20ad8a8d?",
        }}
        style={styles.image1}
      > */}
      <View style={styles.view2}>
        {/* <Text style={styles.heading}>hello</Text> */}
        <Image
          // resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/61adcff51e5d22dcb682eabc6094799c3fd7b89194127cab34074afff8324579?",
          }}
          style={styles.image2}
        />
      </View>
      {/* </Image> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#000",
    display: "flex",
    flex: 1,
    // maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    justifyContent: "center",
    // margin: "0 auto",
  },
  image1: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    aspectRatio: "0.46",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    // background:
    //   "linear-gradient(180deg, rgba(29, 38, 77, 0.00) 0.29%, #1D264D 82.27%)",
    // position: "relative",
    // display: "flex",
    // width: "100%",
    // flexDirection: "column",
    // alignItems: "stretch",
    // padding: "80px 20px 20px",
  },
  image2: {
    alignSelf: "center",
    // position: "relative",
    // marginTop: 378,
    width: 217,
    maxWidth: "100%",
    aspectRatio: "1.69",
  },
  view3: {
    textAlign: "center",
    marginTop: 4,
    // font: "400 14px Poppins, sans-serif ",
  },
  view4: {
    fontFamily: "Poppins, sans-serif",
    borderRadius: 5,
    backgroundColor: "#F97B22",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    // padding: "20px 60px",
  },
  view5: {
    fontFamily: "Poppins, sans-serif",
    borderRadius: 5,
    borderColor: "rgba(202, 101, 20, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 15,
    alignItems: "center",
    color: "#E47318",
    justifyContent: "center",
    // padding: "17px 60px",
  },
  heading: {
    fontSize: 25,
    color: "#fff",
  },
});
export default FlashScreen;

// import React, { useEffect } from 'react';
// import { View, Text, Button, BackHandler, Alert } from 'react-native';

// const App = () => {
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
//         {
//           text: "Cancel",
//           onPress: () => null,
//           style: "cancel"
//         },
//         { text: "YES", onPress: () => BackHandler.exitApp() }
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       "hardwareBackPress",
//       backAction
//     );

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Press back button to exit the app</Text>
//       <Button title="Exit" onPress={() => BackHandler.exitApp()} />
//     </View>
//   );
// };

// export default App;
