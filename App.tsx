import "@tamagui/core/reset.css";
import { TamaguiProvider, View, createTamagui } from "@tamagui/core"; // or 'tamagui'
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { config } from "@tamagui/config/v3";
import FlashScreen from "screens/FlashScreen";
import Counter from "screens/Counter";
// you usually export this from a tamagui.config.ts file

const tamaguiConfig = createTamagui(config);
// make TypeScript type everything based on your config

type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  // or 'tamagui'

  interface TamaguiCustomConfig extends Conf {}
}
export default function app() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* <FlashScreen /> */}
      <Counter />

      {/* <Provider>
        <PersistGate>
          <View>
            
          </View>
        </PersistGate>
      </Provider> */}
    </TamaguiProvider>
  );
}
