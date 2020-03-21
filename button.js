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
  TextInput,
  StatusBar,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            "inputValue":""
        }


    }


    _onBtnPress() {
        alert("cc")
    }

    


    render() {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1,backgroundColor:"gray"}}>
            <View>
       
            <Button title="登录"
                onPress={
                    ()=>{
                        this._onBtnPress()
                    }
                }
            ></Button>
            {/**包装可点击的内容 */}
            <TouchableOpacity style={
                {width:200,height:50,borderRadius:19,
                    backgroundColor:"red",justifyContent:"center",
                    alignItems:"center"
                }
                }>
            <Text   style={{fontSize:30,color:"blue"}}
            >注册账号</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    );
    };

}


export default App;
