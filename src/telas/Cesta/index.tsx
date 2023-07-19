import React from 'react';
import {FlatList, ScrollView, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Texto from '../../components/Texto';
import Topo from './components/Topo';
import Item from './components/Item';
import Detalhes from './components/Detalhes';
const width = Dimensions.get('screen').width;

export default function Cesta({top, details, itens} : any) {
  return (   
    <>
       <FlatList
          data={itens.lista}
          renderItem={Item}
          keyExtractor={ ({nome}) => nome }
          ListHeaderComponent={ 
                                <> 
                                  <Topo {...top} /> 
                                  <View style={styles.basket}>
                                    <Detalhes {...details}/>
                                    <Texto style={styles.titulo}>{itens.titulo}</Texto>                                    
                                  </View>
                                </>
                              }
        />
     
  
      {/* <View style={styles.basket}>
        <Detalhes {...details}/>
        <Itens {...itens}/>
      </View> */}
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
  },
  titulo:{
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize:20,
    lineHeight:32,
  },
})


