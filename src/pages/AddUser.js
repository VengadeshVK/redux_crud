import React, { useEffect, useState } from 'react'
import { Form, Button, } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions'
import { toast } from "react-toastify"

function AddUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        title: "",
        body: ""
    })

    const { title, body } = state

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !body) {
            toast.warning('Please fill all the fields!')
        }
        else {
            dispatch(addUser(state))
            toast.success("Post added succesfully")
            navigate('/')
        }
    }
    return (
        <>
            <Form className="ui form feedBG addContainer" onSubmit={handleSubmit}>
                <div className='addFeed'>
                    <div className='addPostCard'>
                        <div className="field">
                            <label style={{ color: "white" }}>Title</label>
                            <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="title" />
                        </div>
                        <div className="field">
                            <label style={{ color: "white" }}>Description</label>
                            <input type="text" name="body" value={body} onChange={handleInputChange} placeholder="Description" />
                            <br /><br />
                            <Button className="ui button" type="submit">Submit</Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default AddUser