import Api from './Api';

const getAllUsers = async () => {
  const result = await Api.get('users?delay=0.5');
  return result.data.data;
};

const getUser = async (personId) => {
  const result = await Api.get(`users/${personId}?delay=0.5`);
  return result.data.data;
};

export {getAllUsers, getUser};
