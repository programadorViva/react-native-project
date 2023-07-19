import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Texto from '../../../components/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({title}: any) {
  return (   
  <>
    <Image 
      source={require('../../../../assets/topo.png')}
      style={styles.top}
    />  
    <Texto style={styles.title}>{ title }</Texto> 
    {/* <Texto style={styles.title}>Detalhes da cesta</Texto> */}  
  </> 
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * width,
  },
  // main: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  title: {
    width: "100%",
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 40,
  },
  basket: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: 'bold'
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,    
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3",
  },
  price: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2A9F85",
    fontWeight: "bold",
    marginTop: 8,
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  farmImage: {
    width: 32,
    height: 32,
  }
})


