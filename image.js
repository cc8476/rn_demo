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
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import Son from './sonComponent'


const styles= StyleSheet.create({
})


const abc='simple one';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.main}>
       
        <View style ={{width:90,height:89,backgroundColor:"blue"}}>
        {/**加载本地图片 */}
        <Image 
        style={{width:200,height:200}}
         resizeMode='contain' source={require('./assets/big.jpg')}></Image>

        {/**加载网络图片 */}
        <Image 
        style={{width:200,height:200}}
         resizeMode='stretch' source={{uri:"https://i0.hdslb.com/bfs/archive/4de86ebf90b044bf9ba2becf042a8977062b3f99.png"}}></Image>
        {/**加载base64图片 */}
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />

        {/**背景 */}
        <ImageBackground 
        style={{width:200,height:200}}
         resizeMode='stretch' source={require('./assets/big.jpg')}>

      <Text>背景中的文本</Text>

         </ImageBackground>
        </View>



      </SafeAreaView>
    </>
  );
};


export default App;
