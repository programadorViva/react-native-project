import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import Texto from './Texto';
export default function Button ({ children, style } : any) {

  return <>
      <TouchableOpacity style={styles.button} onPress={()=>{ }}>
      <Texto style={styles.textoButton}> {children} </Texto>      
      </TouchableOpacity>
    </> 

}

const styles = StyleSheet.create({
  button: {
    marginTop:16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoButton: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
})


