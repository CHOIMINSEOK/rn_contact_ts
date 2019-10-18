import React from 'react';
import {Text, View, Button} from 'react-native';
import {SampleConsumer} from '../..';
import UserRepositoryInterface from '../domain/UserRepositoryInterface';

export const MindingTodayScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MindingTodayTab!</Text>
      <SampleConsumer>
        {({userRepository}: {userRepository: UserRepositoryInterface}) => (
          <Button
            title="fetch users"
            onPress={() =>
              userRepository.getUsers().then(users => {
                console.warn(`부엉 : ${users}`);
              })
            }
          />
        )}
      </SampleConsumer>
    </View>
  );
};
