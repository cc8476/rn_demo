/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';
import Son from './sonComponent'


const styles= StyleSheet.create({
    main:{
      flex:1,
      //主轴方向  column,row
      flexDirection:"column",
      //对齐方式
      justifyContent:"space-around",
           //侧轴对齐
      alignItems:"center"
    },
    text1:{
        fontSize:20
    },
    text2:{
        fontSize:10
    },
    textCommon:{
        color:"red"
    }
})


const abc='simple one';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.main}>
       
        <View style ={{width:90,height:89,backgroundColor:"blue"}}>
  <Text style={[styles.text1,styles.textCommon]}>视图1</Text>
  <Text style={[styles.text2,styles.textCommon]}>视图2</Text>
  <Son/>
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
