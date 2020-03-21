import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  Button
} from 'react-native';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

            data:require("./data.json")
        }
    }

    _renderitem() {
        
        const jsxarr=[];

        const data = this.state.data;

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

    _add() {
        const obj={
            "id":Math.random(),
            "name":String(Math.ceil(Math.random()*100))
        }

        let arr= this.state.data;
        arr.push(obj);

        this.setState(
            {
                data:arr
            }
        )
    }

    _minus() {
       
        let arr= this.state.data;
        arr.shift();

        this.setState(
            {
                data:arr
            }
        )
    }


    render() {
        return (

        
            <>
            <StatusBar />
            <SafeAreaView>


            <View style={{flexDirection:"row", justifyContent:"center",
        alignItems:"center"}}>

        <Button title="添加" onPress={
            ()=>{
                this._add()
            }
        }></Button>
        <Button title="删除" onPress={
            ()=>{
                this._minus()
            }
        }></Button>
        </View>



            <View style={{flexDirection:"column"}}>

                    <View style= {{flexDirection:"row",flexWrap:"wrap"}}>
                    {this._renderitem()}

                    </View>
            </View>

            </SafeAreaView>
          </>

            );
    }
}

export default App;

