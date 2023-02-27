import React, { useEffect, useState } from 'react'
import { Form, Button, } from 'semantic-ui-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser, updateUser } from '../redux/actions'
import { toast } from "react-toastify"

function Edit() {
    const navigate = useNavigate()
    let { id } = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.data)
    const [state, setState] = useState({
        title: "",
        body: ""
    })

    const { title, body } = state

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !body) {
            toast.warning("Please fill all the fields")
        }
        else {
            dispatch(updateUser(state, id))
            toast.success("Post updated!")
            navigate('/')
        }
    }
    return (
        <>
            <div className='feedBG '>
                <Form className="ui form addContainer" onSubmit={handleSubmit}>
                    <div className='addFeed'>
                        <div className='addPostCard'>                <div className="field">
                            <label style={{ color: "white" }}>Title</label>
                            <input type="text" name="title" value={title || ""} onChange={handleInputChange} placeholder="title" />
                        </div>
                            <div className="field">
                                <label style={{ color: "white" }}>Description</label>
                                <input type="text" name="body" value={body || ""} onChange={handleInputChange} placeholder="Description" />
                            </div>
                            <Button className="ui button" type="submit">Update</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Edit