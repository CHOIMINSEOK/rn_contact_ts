import React, {useContext, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {AppContext} from '../..';
import UserRepositoryInterface from '../domain/UserRepositoryInterface';

export const MindingTodayScreen = () => {
  const {
    userRepository,
  }: {userRepository: UserRepositoryInterface} = useContext(AppContext);

  useEffect(() => {
    userRepository.observeUsers().subscribe({
      next: users => console.warn(users),
    });
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MindingTodayTab!</Text>
      <Button title="fetch users" onPress={() => userRepository.fetchUsers()} />
    </View>
  );
};
