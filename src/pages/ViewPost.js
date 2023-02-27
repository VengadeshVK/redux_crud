import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import { getComment, deleteComment, getSingleUser } from '../redux/actions'
import { toast } from "react-toastify"

function ViewPost() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.data) //users => users:[], from reducer state
    const { users } = useSelector(state => state.comment)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getComment(id))
        dispatch(getSingleUser(id))
    }, [])
    console.log("Users in viewpost", users.length)
    console.log("User in viewpost", user)

    const deletePostComment = (userId, dataId) => {
        dispatch(deleteComment(userId, dataId))
        console.log("deleteComment", userId, "-", dataId)
        toast.success("Comment deleted")
    }

    return (
        <>
            <Card className='ui card feedBG container'  >
                <div className='feed'>
                    <Card.Content className='content feedBG postCard' >
                        <h3 className='Header feedBG' >{user.title}</h3>
                        <p className='commentText feedBG' >{user.body} </p>
                    </Card.Content>
                </div>
            </Card>

            {users.length !== 0 ? users.map(data => (
                <div className="ui card container" key={data.id}>
                    <div className="content center feedBG">
                        <div className="header feedBG"> {data.comment}</div>
                        <i className="trash alternate icon feedBG" onClick={() => deletePostComment(user.id, data.id)}></i>
                    </div>
                </div>
            ))
                : <div className='feedBG'> "No comments " </div>}
        </>
    )
}
export default ViewPost;