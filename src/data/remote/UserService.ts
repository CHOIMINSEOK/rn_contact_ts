export const fetchUsers = async () => {
  return await fetch('https://randomuser.me/api/?results=50&nat=us');
};
