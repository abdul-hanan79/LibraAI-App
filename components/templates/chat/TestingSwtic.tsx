import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const TestingSwtich = ({onValueChange, value, isEnabled}:any) => {
  //   const [isEnabled, setIsEnabled] = useState(false);

  //   const onValueChange = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[
        styles.container,
        // isEnabled ? styles.containerDark : styles.containerLight,
      ]}
    >
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={value}
        />
        <TouchableOpacity
          style={[
            styles.toggleBox,
            isEnabled ? styles.boxLight : styles.boxDark,
          ]}
          onPress={onValueChange}
        >
          <View
            style={[
              styles.ball,
              isEnabled ? styles.ballMoveRight : styles.ballMoveLeft,
            ]}
          />
          <View style={styles.scenery}>
            <Svg width="25" height="25" viewBox="0 0 499.712 499.712">
              <Path
                fill="#FFD93B"
                d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	                C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	                C39.744,355.368,90.944,375.528,146.88,375.528z"
              />
              {/* Add the rest of the SVG paths here */}
            </Svg>
            <Svg width="25" height="25" viewBox="0 0 512 512">
              <Circle fill="#FFD347" cx="255.997" cy="255.997" r="144.824" />
              {/* Add the rest of the SVG paths here */}
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  containerLight: {
    backgroundColor: "#ffff",
  },
  containerDark: {
    backgroundColor: "#000000",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleBox: {
    width: 80,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    position: "relative",
  },
  boxLight: {
    backgroundColor: "#ffffff",
    // borderWidth: 3,
    // borderColor: "black",
  },
  boxDark: {
    backgroundColor: "#000000",
  },
  ball: {
    width: 40,
    height: 40,
    borderRadius: 30,
    position: "absolute",
    borderColor: "#000",
    borderWidth: 3,
  },
  ballMoveLeft: {
    backgroundColor: "#f4f3f4",
    transform: [{ translateX: -15 }],
  },
  ballMoveRight: {
    backgroundColor: "#f5dd4b",
    transform: [{ translateX: 15 }],
  },
  scenery: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    padding: 5,
  },
});

export default TestingSwtich;
