import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Switch,
  StatusBar,
} from 'react-native';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

            //data:require("./data.json")
        }
    }



    render() {
        return (

        
            <>
            <StatusBar />
            <SafeAreaView>
             <View style= {{flex:1,flexDirection:"row",flexWrap:"wrap"}}>

                 <Switch value={this.state.switch}
                 onValueChange ={
                    (bool)=>{
                        this.setState({
                            switch:bool
                        })
                    }
                 }
                 ></Switch>
 
              </View>
            </SafeAreaView>
          </>

            );
    }
}

export default App;

