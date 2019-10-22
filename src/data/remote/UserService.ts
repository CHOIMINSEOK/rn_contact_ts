import User from '../../domain/User';

export const fetchUsersFromServer = async (): Promise<Array<User>> => {
  return fetch('https://randomuser.me/api/?results=50&nat=us')
    .then(response => response.json())
    .then(body => {
      return body.results.map(user => new User(user));
    });
};
