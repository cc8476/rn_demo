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


const styles= StyleSheet.create({
    main:{
      flex:1,
      //主轴方向  column,row
      flexDirection:"column",
      //对齐方式
      justifyContent:"space-around",
           //侧轴对齐
      alignItems:"center"
    }
})


const abc='simple one';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.main}>
        <View style ={{width:55,height:111,backgroundColor:"red"}}>
  <Text>视图1</Text>
        </View>
        <View style ={{width:40,height:50,backgroundColor:"green"}}>
  <Text>视图2</Text>
        </View>
        <View style ={{width:60,height:50,backgroundColor:"white"}}>
  <Text>视图3</Text>
        </View>
        <View style ={{width:90,height:89,backgroundColor:"blue"}}>
  <Text>视图4</Text>
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
