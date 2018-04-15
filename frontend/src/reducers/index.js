import {combineReducers} from 'redux'
import {FILTER_POSTS_BY_POST_TYPE, ADD_POST, GET_POSTS_LIST, SHOW_ALL_POSTS, GET_ALL_CATEGORIES,POST_VOTE,ADD_COMMENT} from '../actions'
import * as api from '../api/api'

const posts = (state = {}, action) => {
    switch (action.type) {
        case FILTER_POSTS_BY_POST_TYPE:
            if (action.postType === SHOW_ALL_POSTS) 
                return action.state
            return action
                .state
                .filter(obj => obj.category === action.postType);
        default:
            return state

    }
}

const getPostList = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS_LIST:
            return action.postsPayload
        default:
            return state
    }

}

const addComment = (state = {}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const commentResponse = api.addComment(action.postCommentPayload);
            return {
                ...state,
                commentResponse
            };
        default:
            return state
    }
}

const addPosts = (state = {}, action) => {
    switch (action.type) {
        case ADD_POST:
            const postResponse = api.addPost(action.postPayload);
            return {
                ...state,
                postResponse
            };
        default:
            return state
    }
}

const postVote = (state = {}, action) => {
    switch (action.type) {
        case POST_VOTE:
            const postResponse = api.postVote(action.postId,action.voteType);
             console.log(postResponse);
            return {
                ...state,
                postResponse
            };
        default:
            return state
    }
}

const getAllCategories = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.allCategories
        default:
            return state
    }
}
export default combineReducers({posts, addPosts, getPostList, getAllCategories,postVote,addComment})
