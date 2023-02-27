import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import { deleteUser, getComment, loadUser } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

function Home() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.data) //users => users:[], from reducer state
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
        toast.success("Post deleted")
        }
        console.log("Home - user :",users)
        return (
            <>
                <Card.Group className="container">
                    <div className="feed">
                        {users.length!==0 ?  users.map((user) => (
                            <Card className='postCard' key={user.id}  >
                                <Card.Content className='content' >
                                    <Card.Header className='Header'>{user.title}</Card.Header>
                                    <p className='commentText'>{user.body} </p>
                                    <i className="edit outline icon" onClick={() => navigate(`/edit/${user.id}`)}  ></i>&emsp;&emsp;
                                    <i className='trash alternate outline icon' onClick={() => handleDelete(user.id)}  ></i>&emsp;&emsp;
                                    <i className='comment outline icon' onClick={() => navigate(`/comment/${user.id}`)}  ></i>&emsp;&emsp;
                                    <i className='comments outline icon' onClick={() => navigate(`/viewpost/${user.id}`)}  ></i>
                                    </Card.Content>
                            </Card>
                        )):<div style={{color:"white"}}> "Haven't posted in a while!" </div>}
                    </div>                    
                </Card.Group>
            </>
        )
    }

    export default Home