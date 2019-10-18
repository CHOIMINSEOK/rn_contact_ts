import User from '../../domain/User';

export const fetchUsers = async (): Promise<Response> => {
  return await fetch('https://randomuser.me/api/?results=50&nat=us');
};
