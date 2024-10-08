import "@tamagui/core/reset.css";
import { TamaguiProvider, View, createTamagui } from "@tamagui/core"; // or 'tamagui'
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { config } from "@tamagui/config/v3";
// import FlashScreen from "screens/FlashScreen";
import Counter from "screens/Counter";
import ChatScreen from "screens/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
// you usually export this from a tamagui.config.ts file
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashScreen from "screens/FlashScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { ColorSchemeProvider } from "context/ColorSchemeContext";
const tamaguiConfig = createTamagui(config);
// make TypeScript type everything based on your config

type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  // or 'tamagui'

  interface TamaguiCustomConfig extends Conf {}
}
export default function app() {
  const Stack = createNativeStackNavigator();
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ColorSchemeProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            {/* <FlashScreen /> */}
            {/* <Counter /> */}
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={FlashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
            {/* <ChatScreen /> */}
            {/* <Provider>
        <PersistGate>
          <View>
            
          </View>
        </PersistGate>
      </Provider> */}
          </NavigationContainer>
        </SafeAreaView>
      </ColorSchemeProvider>
    </TamaguiProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
