import Api from './Api';

const getAllUsers = async () => {
  const result = await Api.get('users');
  return result.data.data;
};

const getUser = async (personId) => {
  const result = await Api.get(`users/${personId}`);
  return result.data.data;
};

export {getAllUsers, getUser};
