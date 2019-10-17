import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ContactlistScreen} from './view/ContactListScreen';
import {SettingsScreen} from './view/SettingsScreen';

const TabNavigator = createBottomTabNavigator({
  ContactList: ContactlistScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
