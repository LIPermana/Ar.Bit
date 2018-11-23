/**
 * Sabtu, 17 September 2018
 *
 * <======= Ar.Bit =======>
 *
 * Aplikasi pembelajaran planet berbasis AR
 * created by :
 * - Bhaswara
 * - Lulu
 * - Rityo
 * - Siti
 */

 import React from "react";
 import { View, Text, Button } from "react-native";
 import { createStackNavigator, createAppContainer } from "react-navigation";

 import Start from './components/start';
 import Home from './components/Home';
 import Scan from './components/Scan';
 import How from './components/How';
 import About from './components/About';
 import Bhas from './components/About/Bhas';

const RootStack = createStackNavigator(
  {
    Started: Start,
    Home: Home,
    Scan: Scan,
    How: How,
    About: About,
  },
  {
    initialRouteName: "Started"
  }
);

 const AppContainer = createAppContainer(RootStack);

 export default class App extends React.Component {
   render() {
     return <AppContainer />;
   }
 }
