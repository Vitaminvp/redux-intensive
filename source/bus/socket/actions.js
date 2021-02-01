// Actions
import { socket } from '../../init/socket';
import { uiActions } from '../ui/action';
import { postActions } from '../posts/actions';

export const socketActions = {
  listenConnections: () => dispatch => {
    socket.on('connect', () => {
      dispatch(uiActions.setOnlineState());
    });
    socket.on('disconnect', () => {
      dispatch(uiActions.setOfflineState());
    });
  },
  listenPosts: () => (dispatch, getState) => {
    socket.on('create', event => {
      const { data: post } = JSON.parse(event);
      dispatch(postActions.createPost(post));
    });
    socket.on('remove', event => {
      const { data: postId } = JSON.parse(event);
      dispatch(postActions.removePost(postId));
    });
    socket.on('like', event => {
      const { data, meta } = JSON.parse(event);

      if (meta.action === 'like') {
        const liker = getState()
          .users.find(user => user.get('id') === data.userId)
          .delete('avatar');

        dispatch(
          postActions.likePost({
            postId: data.postId,
            liker,
          })
        );
      } else {
        dispatch(postActions.unlikePost(data));
      }
    });
  },
};
