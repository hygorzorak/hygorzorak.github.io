import * as type from './types'

export const getPosts = posts => ({type: type.GET_POSTS, posts})

export const getPostById = currentPost => ({type: type.GET_POST_BY_ID, currentPost})

// export const fetchPosts = () => dispatch => (api.getPosts().then(res => dispatch(getPosts({posts: res}))))

// export const fetchPostById = postId => dispatch => (api.getPostById(postId).then(res => dispatch(getPostById(res))))