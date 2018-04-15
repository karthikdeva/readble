export const FILTER_POSTS_BY_POST_TYPE = 'FILTER_POSTS_BY_POST_TYPE'
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_POST = 'ADD_POST';
export const GET_POSTS_LIST = 'GET_POSTS_LIST';
export const SHOW_ALL_POSTS = 'SHOW_ALL_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const POST_VOTE = 'POST_VOTE';

export const filterPostSByPostType = (state, postType) => {
    return dispatch => {
        dispatch({type: FILTER_POSTS_BY_POST_TYPE, state, postType})
    }
}


export const addComment = (postCommentPayload) => {
    return dispatch => {
        dispatch({type: ADD_COMMENT, postCommentPayload})
    }
}
export const addPost = (postPayload) => {
    return dispatch => {
        dispatch({type: ADD_POST, postPayload})
    }
}

export const getPostList = (postsPayload) => {
    return dispatch => {
        dispatch({type: GET_POSTS_LIST, postsPayload})
    }
}

export const postVote = (postId, voteType) => {
    return dispatch => {
        dispatch({type: POST_VOTE, postId, voteType})
    }
}

export const getAllCategories = (allCategories) => {
    return dispatch => {
        dispatch({type: GET_ALL_CATEGORIES, allCategories})
    }

}