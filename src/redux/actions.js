import axios from 'axios'
import * as types from './actionType'
import {REACT_APP_API} from '../API'

const getUsers = (users)=>({
    type:types.GET_USERS,
    payload : users,
})

const userDeleted =()=>({
    type:types.DELETE_USER
})

const userAdded =()=>({
    type:types.ADD_USER
})

const userUpdated =()=>({
    type:types.UPDATE_USER
})

const getUser =(users)=>({
    type:types.GET_SINGLE_USER,
    payload:users,
})

export const loadUser = ()=>{
    return function (dispatch){
        axios.get(REACT_APP_API)
        .then((response)=>{
            console.log("response",response)
            dispatch(getUsers(response.data))
        }).catch((error)=>console.log(error))
    }
}

export const deleteUser = (id)=>{
    return function (dispatch){
        axios.delete(REACT_APP_API+id)
        .then((response)=>{
            console.log(REACT_APP_API+id)
            console.log("Id",id,"Response",response)
            dispatch(userDeleted())
            dispatch(loadUser())
        }).catch((error)=>console.log(error))        
    }
}

export const addUser = (user)=>{
    return function (dispatch){
        axios.post(REACT_APP_API,user)
        .then((response)=>{
            // console.log("Id",id,"Response",response)
            dispatch(userAdded())
            dispatch(loadUser())
        }).catch((error)=>console.log(error))        
    }
}

export const getSingleUser = (id)=>{
    return function (dispatch){
        axios.get(REACT_APP_API+id)
        .then((response)=>{
            console.log(REACT_APP_API+id)
            console.log("Id",id,"Response",response)
            dispatch(getUser(response.data))
        }).catch((error)=>console.log(error))        
    }
}

export const updateUser = (user,id)=>{
    return function (dispatch){
        axios.put(REACT_APP_API+id,user)
        .then((response)=>{
            console.log(REACT_APP_API+id,user)
            console.log("Id",id,"Response",response)
            dispatch(userUpdated())
        }).catch((error)=>console.log(error))        
    }
}