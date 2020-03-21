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
  Dimensions,
  Platform
} from 'react-native';



const deviceWidth='simple one';

const scaleInfo= "x1 = 显示一个50x50的图，使用的图片就是50x50   \n x3=  显示一个50x50的图，使用的图片就是150x150  (需要的图片分辨率更高)";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View>
  <Text>当前设备的宽度：{Dimensions.get("window").width}</Text>
  <Text>当前设备的高度：{Dimensions.get("window").height}</Text>
  <Text>当前设备的分辨率：{Dimensions.get("window").scale}</Text>
  <Text>
    {scaleInfo}
  </Text>
  <Text>
    {Platform.OS}  -- {Platform.Version}  -- {Platform.isPad} 
  </Text>

        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
