import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, } from 'semantic-ui-react'
import { newComment } from '../redux/actions'
import { toast } from "react-toastify"

function AddComment() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { id } = useParams()
    const [state, setState] = useState({
        comment: ""
    })
    const { comment } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!comment) {
            toast.warning("Please fill all the field!")
        }
        else {
            dispatch(newComment(state, id))
            navigate('/')
            console.log("comment :", state, "id :", id)
            toast.success("Comment added successfully!")
        }
    }
    const handleInputChange = (e) => {

        let { name, value } = e.target;
        setState({ ...state, [name]: value })

    }
    return (
        <>
            <div className='feedBG'>
                <Form className="ui form addContainer" onSubmit={handleSubmit}>
                    <div className='addFeed'>
                        <div className='addPostCard'>
                            <div className="field">
                                <label style={{ color: "white" }}>Comment</label>
                                <input type="text" name='comment' value={comment} onChange={handleInputChange} placeholder="Comment here..." />
                            </div>
                            <Button className="ui button" type="submit">Comment</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddComment