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

const addComment=()=>({
    type:types.ADD_COMMENT,
    payload : users,
})

const loadComment=(users)=>({
    type:types.GET_COMMENT,
    payload : users,
})

const commentDeleted=()=>({
    type:types.DELETE_COMMENT
})

export const loadUser = ()=>{
    return function (dispatch){
        axios.get(REACT_APP_API)
        .then((response)=>{
            console.log("action Load user ",response)
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

export const addUser =  (user)=>{
    return function (dispatch){
        axios.post(REACT_APP_API,user)
        .then((response)=>{
            console.log("From add user Id",id,"Response",response.data)
            dispatch(userAdded())
            // dispatch(loadUser())
        }).catch((error)=>console.log(error))        
    }
}

export const getSingleUser = (id)=>{
    return function (dispatch){
        axios.get(REACT_APP_API+id)
        .then((response)=>{
            console.log(REACT_APP_API+id)
            console.log("getSingleUser -id",id,"Response",response.data)
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
            dispatch(loadUser())
            // dispatch(getUser(response.data))
        }).catch((error)=>console.log(error))        
    }
}

export const newComment = (user,id)=>{
    return function (dispatch){
        axios.post(REACT_APP_API+id+'/comment',user)
        .then((response)=>{
            console.log("From newComment dispatch - Id",id,"Response",response)
            dispatch(addComment())
            dispatch(loadUser())
        }).catch((error)=>console.log(error))        
    }
}

export const getComment =(id)=>{
    return function(dispatch){
        console.log("getcomment",id);
        axios.get(REACT_APP_API+id+'/comment').then((response)=>{
            console.log("From getComment dispatch - Id",id,"Response",response.data)
            dispatch(loadComment(response.data))
        }).catch((error)=>console.log(error))
    }
}

export const deleteComment = (id,commentId)=>{
    return function (dispatch){
        
        axios.delete(REACT_APP_API+id+'/comment/'+commentId)
        .then((response)=>{
            // console.log(REACT_APP_API+id)
            console.log("Id",id,"comment Id",commentId,"Response",response.data)
            dispatch(commentDeleted())
            dispatch(getComment(id))
        }).catch((error)=>console.log(error))        
    }
}