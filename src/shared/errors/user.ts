// User: 2xxx
export const userError = {
  isExistEmail: {
    code: '2000',
    message: 'Email is already in use',
  },
  isNotExistUser: {
    code: '2001',
    message: 'User does not exist',
  },
  isWrongPasswordOrEmail: {
    code: '2002',
    message: 'Incorrect password or email',
  },
  isWrongPassword: {
    code: '2002',
    message: 'Incorrect password',
  },
  unauthorize: {
    code: '2003',
    message: 'Unauthorized access',
  },
  isExpiredJWT: {
    code: '2004',
    message: 'JWT has expired',
  },
};
