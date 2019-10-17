/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ContactlistScreen} from './view/ContactListScreen';
import {SettingsScreen} from './view/SettingsScreen';

// RouteConfig로 분리할 수 있을 것 같다.
const MainTabs = createBottomTabNavigator(
  {
    Contacts: ContactlistScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Contacts') {
          iconName = 'ios-contacts';
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  },
);

const App = () => {
  return MainTabs;
};

export default App;
