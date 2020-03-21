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
    view_1:{
        width:200,
        height:200,
        backgroundColor:"green"
    }
})


const abc='simple one';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1,backgroundColor:"gray"}}>
        <View style ={styles.view_1}>
  <Text>{abc}</Text>

        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
