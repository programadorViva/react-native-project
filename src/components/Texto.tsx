import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Texto ({ children, style } : any) {
  let textStyle = styles.textRegular;

  if(style?.fontWeight === 'bold') {
    textStyle = styles.textBold;
  }

  return <Text style={[textStyle, style]}>{ children }</Text>

}

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: 'normal'
  }
})


