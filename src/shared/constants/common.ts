export const MAX_LENGTH = {
  PHONE: 10,
  PASSWORD: 32,
  COMMON: 255,
};

export const MIN_LENGTH = {
  PASSWORD: 8,
};

export const REGEX = {
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
};

export const MESSAGES = {
  // Common
  CREATE_SUCCESS: 'Create data successfully',
  UPDATE_SUCCESS: 'Update data successfully',
  DELETE_SUCCESS: 'Delete data successfully',
  GET_SUCCESS: 'Get data successfully',

  // User
  PASSWORD_VALID:
    'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
};
