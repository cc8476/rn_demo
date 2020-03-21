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
  StyleSheet
} from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            "inputValue":""
        }


    }


    


    render() {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1,backgroundColor:"gray"}}>
            <View>
        <TextInput style={{borderColor:"red",borderWidth:1}} 
        keyboardType="number-pad"
        placeholder='please input ...'
        multiline={true}
        onChangeText = {
            (text)=>{
                this.setState(
                    {
                        inputValue:text
                    }
                )
            }
        }
        />

    <Text>{this.state.inputValue}</Text>

            </View>
        </SafeAreaView>
        </>
    );
    };

}


export default App;
