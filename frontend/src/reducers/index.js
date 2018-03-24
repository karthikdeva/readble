import {combineReducers} from 'redux'
import {FILTER_POSTS_BY_POST_TYPE} from '../actions'

const posts = (state = {}, action) => {
    switch (action.type) {
        case FILTER_POSTS_BY_POST_TYPE:
            const posts = action
                .state
                .filter(obj => obj.category === action.postType);
            return posts;
        default:
            return state

    }
}

export default combineReducers({posts})
