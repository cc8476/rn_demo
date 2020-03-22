import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ScrollView
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
             <View>

                <ScrollView
                    //是否水平移动
                    horizontal={false}
                    style={{
                        height:900

                    }}
                >

                <View style ={{width:300,height:900,backgroundColor:"red",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <View>
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
                </View>

                </ScrollView>
 
              </View>
            </SafeAreaView>
          </>

            );
    }
}

export default App;

