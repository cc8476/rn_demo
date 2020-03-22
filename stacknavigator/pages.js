import React from 'react';
import {View, Text, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs'

class HomeScreen extends React.Component {

  //设置单个页面的头部导航的内容
  static navigationOptions ={
    title:"首页标题",
    headerStyle:{
      backgroundColor:"skyblue"
    },
    headerTintColor:"#ff00ff",
    headerTitleStyle:{
      fontSize:20,
      fontWeight:"bold"
    },
    headerLeft:()=>{
      return <Button title="左边设置"></Button>
    },
    headerRight:()=>{
      return <Button title="右边设置"></Button>
    },
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: 'cyan',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>首页</Text>
          <Button
            title="跳转到详情"
            onPress={() => {
              this.props.navigation.navigate('Detail',
              {a:"aaa",b:"bbb"}
              );
            }}></Button>
        </View>
      </>
    );
  }
}

class DetailScreen extends React.Component {

  constructor(props) {
    super();
  }

  render() {

    const {navigation} =this.props;
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>详情页</Text>
        <Text>获取传递的参数：   {JSON.stringify(navigation)}</Text>
        <Text>获取传递的参数：   {JSON.stringify(navigation.getParam('a'))}</Text>

          <Button
            title="跳转到详情"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}></Button>

          <Button
            title="返回陈大诺"
            onPress={() => {
              this.props.navigation.goBack();
            }}></Button>
        </View>
      </>
    );
  }
}

//堆栈方式的导航
const Rootstack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
});





const AppContainer = createAppContainer(Rootstack);

export default AppContainer;
