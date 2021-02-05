import { profileActions } from '../action';

describe('profile actions:', () => {
  test('fillProfile', () => {
    expect(profileActions.fillProfile(testData.userProfile)).toMatchSnapshot();
  });

  test('updateAvatar', () => {
    expect(profileActions.updateAvatar(testData.url)).toMatchSnapshot();
  });

  test('clearProfile', () => {
    expect(profileActions.clearProfile()).toMatchSnapshot();
  });

  test('updateAvatarAsync', () => {
    expect(profileActions.updateAvatarAsync(testData.newAvatar)).toMatchSnapshot();
  });

  test('updateNameAsync', () => {
    expect(profileActions.updateNameAsync(testData.newName)).toMatchSnapshot();
  });

  test('updatePasswordAsync', () => {
    expect(profileActions.updatePasswordAsync(testData.newPassword)).toMatchSnapshot();
  });
});
