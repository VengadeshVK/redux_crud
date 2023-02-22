import userReducer from './reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    data : userReducer
})

export default rootReducer