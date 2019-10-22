import EmployeeRepositoryInterface from '../domain/UserRepositoryInterface';

import {fetchUsers} from './remote/UserService';
import User from '../domain/User';

export default class UserRepository implements EmployeeRepositoryInterface {
  public async getUsers(): Promise<Array<User>> {
    // 상세 구현 필요
    return fetchUsers();
  }
}
