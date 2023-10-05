import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackView,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { View } from "react-native";

import Questao01App from "./Questao01App";

const ProvaApp = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Group>
          <NativeStack.Screen name="Quest01" component={Questao01App} />
        </NativeStack.Group>
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
export default ProvaApp;
