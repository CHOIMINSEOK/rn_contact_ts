/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createContext} from 'react';
import UserRepository from './src/data/UserRepository';

export const AppContext = createContext();
export const {Provider, Consumer: RepositoryConsumer} = AppContext;

const repositories = {
  userRepository: new UserRepository(),
};

const Root = () => (
  <Provider value={repositories}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);

// AppRegistry.registerComponent(appName, () => App);
