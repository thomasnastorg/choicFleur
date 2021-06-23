import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {StyleSheet,Alert, Button, View,Text,Image} from 'react-native';
import Game from './Navigation/Game';
import Home from './Navigation/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
 return(
   <NavigationContainer>
     <Navigator>
       <Screen name="home" component={Home}/>
      <Screen name="game" component={Game}/>
     </Navigator>
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  viewGeneral: {
      flex: 1,
     backgroundColor: '#F2EBBF'
  },
 
})

export default App

