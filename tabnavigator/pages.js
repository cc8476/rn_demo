import React from 'react';

import FindPage from './FindPage';
import HomePage from './HomePage';
import NearPage from './NearPage';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import {Image} from 'react-native';

const TABS = {
  home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: focus => {
        if (focus) {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/a.png')}></Image>
          );
        } else {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/b.png')}></Image>
          );
        }
      },
    },
  },

  find: {
    screen: FindPage,
    navigationOptions: {
      tabBarLabel: '发现页',
      tabBarIcon: focus => {
        if (focus) {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/c.png')}></Image>
          );
        } else {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/d.png')}></Image>
          );
        }
      },
    },
  },
  near: {
    screen: NearPage,
    navigationOptions: {
      tabBarLabel: '附近页',
      tabBarIcon: focus => {
        if (focus) {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/e.png')}></Image>
          );
        } else {
          return (
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/f.png')}></Image>
          );
        }
      },
    },
  },
};
const tabs = [TABS.home, TABS.find, TABS.near];
const Rootstack = createBottomTabNavigator(tabs, {
  tabBarOptions: {
    activeTintColor: 'blue', //活动选项卡的标签和图标颜色。
    activeBackgroundColor: 'red', //活动选项卡的背景颜色。
    inactiveTintColor: 'yellow', //非活动选项卡的标签和图标颜色。
    inactiveBackgroundColor: 'pink', //非活动选项卡的背景颜色。

    // showLabel: true,//是否为标签显示标签，默认为true。
    // showIcon: true,//是否显示选项卡的图标，默认为true。

    // style: {},//标签栏的样式对象。
    labelStyle: {
      //选项卡标签的样式对象。
      fontSize: 15,
    },
  },
});

export default createAppContainer(Rootstack);
