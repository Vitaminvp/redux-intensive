import { fromJS, List, Map } from 'immutable';
import { profileReducer } from '../reducer';
import { profileActions } from '../action';

describe('profile reducer:', () => {
  test('should return initial state by default', () => {
    expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
      Immutable.Map {
        "id": "",
        "firstName": "",
        "lastName": "",
        "avatar": "",
        "token": "",
      }
    `);
  });
  test('should handle fillProfile', () => {
    expect(
      profileReducer(void 0, profileActions.fillProfile(testData.userProfile))
    ).toMatchInlineSnapshot(`
      Immutable.Map {
        "id": "TEST_ID",
        "firstName": "TEST_FIRST_NAME",
        "lastName": "TEST_LAST_NAME",
        "avatar": "TEST_AVATAR",
        "token": "TEST_TOKEN",
      }
    `);
  });
  test('should handle updateAvatar', () => {
    expect(profileReducer(void 0, profileActions.updateAvatar(testData.url)))
      .toMatchInlineSnapshot(`
      Immutable.Map {
        "id": "",
        "firstName": "",
        "lastName": "",
        "avatar": "https://www.url.com",
        "token": "",
      }
    `);
  });
  test('should handle clearProfile', () => {
    expect(
      profileReducer(void 0, profileActions.clearProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});
