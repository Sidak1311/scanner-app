import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ScanScreen from './screens/ScanScreen';

export default function App() {
    
}
const TabNavigator = createBottomTabNavigator({
  Scanner: {screen: ScanScreen},
})

const switchNavigator = createSwitchNavigator({Scanner:{screen:ScanScreen}})
const AppContainer = createAppContainer(switchNavigator)