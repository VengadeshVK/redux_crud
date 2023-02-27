import userReducer, { CommentReducer } from './reducer'
import {combineReducers,} from 'redux'

const rootReducer = combineReducers({
    data : userReducer,
    comment :CommentReducer
})

export default rootReducer