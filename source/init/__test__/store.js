// Core
import { createStore, combineReducers } from 'redux';

// Reducers
import { postReducer as posts } from '../../bus/posts/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { authReducer as auth } from '../../bus/auth/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formReducer as forms } from '../../bus/forms/reducer';

// Store
import { store } from '../store';

export const referenceRootReducer = combineReducers({
  posts,
  ui,
  auth,
  profile,
  users,
  forms,
});

const referenceStore = createStore(referenceRootReducer);

describe('store', () => {
  test('should have valid shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});
