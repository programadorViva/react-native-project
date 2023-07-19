import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Texto from '../../../components/Texto';

export default function Item({item: {nome, imagem}}:any)  {
  return  <View style={styles.item}  >   
            <Image 
              source={imagem}
              style={styles.imagem}
            />                    
            <Texto  style={styles.nome} >{ nome }</Texto>                    
          </View>
  // return (   
  //   <>
  //       <Texto style={styles.titulo}>{titulo}</Texto>
       

  //       { 
  //         lista.map(( {nome,imagem}: any )=>{
  //           return  <View style={styles.item} key={nome} >   
  //                    <Image 
  //                       source={imagem}
  //                       style={styles.imagem}
  //                     />                    
  //                     <Texto  style={styles.nome} >{ nome }</Texto>
                      
  //                   </View>
  //         }) 
  //       }
  //   </> 
  // );
}

const styles = StyleSheet.create({ 
  item:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal:16,
    alignItems: "center"
  },
  imagem:{
    width: 46,
    height: 46
  },
  nome:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
})


