import { fromJS, List, Map } from 'immutable';
import { uiReducer } from '../reducer';
import { uiActions } from '../action';

describe('ui reducer:', () => {
  test('should return initial state by default', () => {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
      Immutable.Map {
        "isFetching": false,
        "isOnline": false,
      }
    `);
  });
  test('should handle stopFetching', () => {
    expect(uiReducer(void 0, uiActions.stopFetching())).toMatchInlineSnapshot(`
      Immutable.Map {
        "isFetching": false,
        "isOnline": false,
      }
    `);
  });
  test('should handle startFetching', () => {
    expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
      Immutable.Map {
        "isFetching": true,
        "isOnline": false,
      }
    `);
  });
  test('should handle setOnlineState', () => {
    expect(uiReducer(void 0, uiActions.setOnlineState()))
      .toMatchInlineSnapshot(`
      Immutable.Map {
        "isFetching": false,
        "isOnline": true,
      }
    `);
  });
  test('should handle setOfflineState', () => {
    expect(uiReducer(void 0, uiActions.setOfflineState()))
      .toMatchInlineSnapshot(`
      Immutable.Map {
        "isFetching": false,
        "isOnline": false,
      }
    `);
  });
});
