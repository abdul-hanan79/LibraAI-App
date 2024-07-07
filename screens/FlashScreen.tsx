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

function FlashScreen() {
  return (
    <View style={styles.view1}>
      <Image
        // resizeMode="cover"
        fitContent
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9079cb828bd22ac21243314ad40f0a63dcd35080d09c481695c38dd20ad8a8d?",
        }}
        style={styles.image1}
      >
        <View style={styles.view2}>
          <Image
            // resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/61adcff51e5d22dcb682eabc6094799c3fd7b89194127cab34074afff8324579?",
            }}
            style={styles.image2}
          />
          <View style={styles.view3}>
            <Text>
              Find your perfect match on this <br />
              matrimony app
            </Text>
          </View>
          <View style={styles.view4}>
            <Text>Create an account</Text>
          </View>
          <View style={styles.view5}>
            <Text>Log in</Text>
          </View>
        </View>
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#FFF",
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
    alignItems: "stretch",
    justifyContent: "center",
  },
  view2: {
    // background:
    //   "linear-gradient(180deg, rgba(29, 38, 77, 0.00) 0.29%, #1D264D 82.27%)",
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    // padding: "80px 20px 20px",
  },
  image2: {
    alignSelf: "center",
    position: "relative",
    marginTop: 378,
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
});

