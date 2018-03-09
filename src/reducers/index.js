import * as types from '../actions/types'

export default(state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return state;
    case types.GET_POST_BY_ID:
      return state;
    default:
      return state;
  }
};