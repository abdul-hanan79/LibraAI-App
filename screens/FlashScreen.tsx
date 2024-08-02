import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import FastImage from "react-native-fast-image";

function FlashScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const goToChatScreen = () => {
    setTimeout(() => {
      console.log("working");
      navigation.navigate("Chat");
    }, 2000);
  };
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);
  goToChatScreen();
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Image
          // resizeMode="auto"
          source={require("assets/logo.png")}
          style={styles.image2}
        />
      </View>
      <View style={{ justifyContent: "flex-end", marginBottom: 90 }}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          Powered by Abdul Hanan
        </Animated.Text>
        {/* <Text style={styles.heading}></Text> */}
      </View>
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
    justifyContent: "space-between",
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
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: 220,
    height: 230,
    // maxWidth: "100%",
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
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
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
