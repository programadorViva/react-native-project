import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';
import Button from '../../../components/Button';

const width = Dimensions.get('screen').width;

export default function Detalhes({name, farmName, description, price, button}: any) {
  return (   
  <>
    <Texto style={styles.name}> {name} </Texto>
    <View style={styles.farm}>
      <Image 
        source={require('../../../../assets/logo.png')}
        style={styles.farmImage}
      /> 
      {/* <Text style={styles.farmName}></Text> */}
      <Texto style={styles.farmName}> {farmName} </Texto>
    </View>       
    {/* <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text> */}
    <Texto style={styles.description}> {description} </Texto>
    <Texto style={styles.price}> {price} </Texto>

    <Button>{button}</Button>
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


