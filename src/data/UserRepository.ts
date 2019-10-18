import EmployeeRepositoryInterface from '../domain/UserRepositoryInterface';

import {fetchUsers} from './remote/UserService';
import User from '../domain/User';

class UserRepository implements EmployeeRepositoryInterface {
  public async getUsers(): Promise<Array<User>> {
    // 상세 구현 필요
    const request = fetchUsers();
    return request
      .then(response => response.json())
      .then(result => result.map(user => new User(user)));
  }
}
