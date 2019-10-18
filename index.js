/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createContext} from 'react';
import UserRepository from './src/data/UserRepository';

const Context = createContext(); // Context 를 만듭니다.

// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
// Consumer 는 나중에 내보내줄 때 편하도록 SampleConsumer 라고 부르도록 설정했습니다.
export const {Provider, Consumer: SampleConsumer} = Context;

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
