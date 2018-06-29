import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS, SET_TO_DELETE, DELETE_READ
} from '../actions'

const selectedSubreddit = (state = 'reddit', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts
      }
    case DELETE_READ:
      return state.filter(action => action.posts.author === action.toDelete.name)
    default:
      return state
  }
}

const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const setToDelete = (state, action) => Object.assign({}, state, action);

const DEFAULT_STATE = {
  toDelete: ''
};

const setToDeleteReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TO_DELETE:
      return setToDelete(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  setToDeleteReducer 
})

export default rootReducer
