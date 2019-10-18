import User from './User';

export default interface UserRepositoryInterface {
  // 리턴되는 Model Type 정의하기
  // 이걸 Observable하게 만들고, Root App에서 필요한 View에다가 Injection 해주는 형태가 되면 좋을 것 같다.
  getUsers(): Promise<Array<User>>;
}
