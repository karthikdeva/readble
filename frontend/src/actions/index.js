export const FILTER_POSTS_BY_POST_TYPE = 'FILTER_POSTS_BY_POST_TYPE'
export const filterPostSByPostType = (state, postType) => {
    return dispatch => {
        dispatch({type: FILTER_POSTS_BY_POST_TYPE, state, postType})
    }
}
