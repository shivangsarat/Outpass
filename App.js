import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomePage from './Components/HomePage';
import Signin from './Components/Signin';
import AppNavigator from "./Navigation"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    <View>
      <AppNavigator />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const HomeStack = createStackNavigator({
//   HomePage: { screen: HomePage,},
//   Signin: { screen: Signin,},
// });

// const App = createAppContainer(HomeStack);

// export default App