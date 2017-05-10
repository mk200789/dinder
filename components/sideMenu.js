import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, Text, Button} from 'react-native'
import { Drawer, View } from 'native-base'
import {DrawerNavigator} from 'react-navigation'
import styles from './style'
import MyHomeScreen from './Home'
import MyNotificationsScreen from './Notification'

const SideMenu = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  }
});

export default SideMenu;
