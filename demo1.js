import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

            //data:require("./data.json")
        }
    }

    _renderitem() {
        
        const jsxarr=[];

        const data = require("./data.json");

        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            jsxarr.push(
                <View style={{height:100,marginLeft:5,marginTop:5}}>
                    <Image source={require('./assets/small.jpg')}/>
                    <Text>{element.name}</Text>
                </View>
            )
        }

        return jsxarr;


    }


    render() {
        return (

        
            <>
            <StatusBar />
            <SafeAreaView>
             <View style= {{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
              {this._renderitem()}

              </View>
            </SafeAreaView>
          </>

            );
    }
}

export default App;

