// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const id = 'TEST_ID';
const firstName = 'TEST_FIRST_NAME';
const lastName = 'TEST_LAST_NAME';
const token = 'TEST_TOKEN';
const avatar = 'TEST_AVATAR';
const email = 'TEST_EMAIL';
const password = '12345';
const invite = 'xy18273y4h';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const successMessage = 'TEST_SUCCESS_MESSAGE.';
const error = new Error(errorMessage);

const userProfile = {
  id,
  firstName,
  lastName,
  avatar,
  token,
};

const signupData = {
  firstName,
  lastName,
  email,
  password,
  invite,
};

const credentials = {
  email: 'test@email.com',
  password: '1111',
  remember: true,
};

const users = [{ ...userProfile }, { ...userProfile }, { ...userProfile }];

const url = 'https://www.url.com';

const newName = {
  firstName: 'Walter',
  lastName: 'White',
};

const newAvatar = ['avatar'];

const newPassword = {
  oldPassword: '12345',
  newPassword: '123456',
};

const responseDataSuccess = {
  data: userProfile,
  message: successMessage,
};

const responseUsersSuccess = {
  data: users,
  message: successMessage,
};

const responseDataFail = {
  message: errorMessage,
};

const fetchResponseSuccess = {
  status: 200,
  json: jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchUsersSuccess = {
  status: 200,
  json: jest.fn(() => Promise.resolve(responseUsersSuccess)),
};

const fetchResponseFail401 = {
  status: 401,
  json: jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
  status: 400,
  json: jest.fn(() => Promise.resolve(responseDataFail)),
};

global.testData = {
  userProfile,
  signupData,
  errorMessage,
  token,
  error,
  users,
  credentials,
  url,
  newName,
  newAvatar,
  newPassword,
  responseDataSuccess,
  responseDataFail,
  fetchResponseSuccess,
  fetchResponseFail401,
  fetchResponseFail400,
  responseUsersSuccess,
  fetchUsersSuccess,
};

global.fetch = fetch;
global.localStorage = new LocalStorage();
