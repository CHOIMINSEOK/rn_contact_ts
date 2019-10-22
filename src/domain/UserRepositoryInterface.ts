import User from './User';
import {Observable} from 'rxjs';

export default interface UserRepositoryInterface {
  observeUsers(): Observable<Array<User>>;
  fetchUsers(): void;
}
