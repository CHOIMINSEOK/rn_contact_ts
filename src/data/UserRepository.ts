import EmployeeRepositoryInterface from '../domain/UserRepositoryInterface';

import {fetchUsers} from './remote/UserService';

class UserRepository implements EmployeeRepositoryInterface {
  public getUsers() {
    // 상세 구현 필요
    fetchUsers();
  }
}
