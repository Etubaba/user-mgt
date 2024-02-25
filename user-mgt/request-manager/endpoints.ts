export const requestEndpoints = {
  login: `user/login`,
  register: `user/register`,
  updateProfile: (id: string) => `user/update/${id}`,
  validateToken: `token/validate`,
};
