import { uiActions } from '../action';

describe('ui actions:', () => {
  test('setOfflineState', () => {
    expect(uiActions.setOfflineState()).toMatchSnapshot();
  });

  test('setOnlineState', () => {
    expect(uiActions.setOnlineState()).toMatchSnapshot();
  });

  test('stopFetching', () => {
    expect(uiActions.stopFetching()).toMatchSnapshot();
  });

  test('startFetching', () => {
    expect(uiActions.startFetching()).toMatchSnapshot();
  });

  test('updateNameAsync', () => {
    expect(uiActions.emitError(testData.error)).toMatchSnapshot();
  });
});
