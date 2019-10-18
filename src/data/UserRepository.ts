import EmployeeRepositoryInterface from '../domain/UserRepositoryInterface';

import {fetchUsers} from './remote/UserService';
import User from '../domain/User';

export default class UserRepository implements EmployeeRepositoryInterface {
  public async getUsers(): Promise<Array<User>> {
    // 상세 구현 필요
    const request = fetchUsers();
    return request
      .then(response => response.json())
      .then(body => {
        console.warn(body);
        return body.results.map(user => new User(user));
      });
  }
}
