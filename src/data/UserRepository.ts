import EmployeeRepositoryInterface from '../domain/UserRepositoryInterface';

import {BehaviorSubject, Observable} from 'rxjs';
import {fetchUsersFromServer} from './remote/UserService';
import User from '../domain/User';

export default class UserRepository implements EmployeeRepositoryInterface {
  private usersSubject: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

  observeUsers(): Observable<Array<User>> {
    return this.usersSubject;
  }

  fetchUsers(): void {
    fetchUsersFromServer().then(users => this.usersSubject.next(users));
  }
}
