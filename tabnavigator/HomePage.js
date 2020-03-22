/*
* Created by joechen  2020-03-22 18:28
*/
import React from 'react';
import {
    View,Text
} from 'react-native';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
            style={{
              flex: 1,
              backgroundColor: 'cyan',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>首页</Text>
          </View>
        );
    }
}

export default App;