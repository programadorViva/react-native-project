
import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic} from '@expo-google-fonts/montserrat';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import mock from './src/mocks/cesta';

  
export default function App() {
  const [fontsloaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  
  if (fontsloaded) {
    return (
      <KeyboardAvoidingView 
        style={{ flex: 1}} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      >
        <StatusBar/>
        <Cesta {...mock} />
      </KeyboardAvoidingView>
    );
  } else {
     return <Apploading />
  }
}

