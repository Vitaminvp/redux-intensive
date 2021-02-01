// Types
import { types } from './types';

export const profileActions = {
  fillProfile: profile => {
    return {
      type: types.FILL_PROFILE,
      payload: profile,
    };
  },
  clearProfile: () => {
    return {
      type: types.CLEAR_PROFILE,
    };
  },
  updateNameAsync: newName => {
    return {
      type: types.UPDATE_NAME_ASYNC,
      payload: newName,
    };
  },
  updateAvatar: newAvatarUrl => {
    return {
      type: types.UPDATE_AVATAR,
      payload: newAvatarUrl,
    };
  },
  updatePasswordAsync: passwordData => {
    return {
      type: types.UPDATE_PASSWORD_ASYNC,
      payload: passwordData,
    };
  },
  updateAvatarAsync: newAvatar => {
    return {
      type: types.UPDATE_AVATAR_ASYNC,
      payload: newAvatar,
    };
  },
};
