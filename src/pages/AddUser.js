import React, { useEffect, useState } from 'react'
import { Form, Button ,} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/actions'

function AddUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        title: "",
        body: ""
    })
    const[error,setError]=useState('')

    const {title,body} = state

    const handleInputChange =(e)=>{
        let {name,value} = e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!title || !body){
            setError("Please fill all the inputs")
        }
        else{
            dispatch(addUser(state))
            navigate('/')
            setError('')
        }
    }
    return (
        <>
        {error && <h3 style={{color:"red"}}>{error}</h3>}
            <Form className="ui form feedBG " onSubmit={handleSubmit}>
                <div className="field">
                    <label style={{color:"white"}}>Title</label>
                    <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="title"/>
                </div>
                <div className="field">
                    <label style={{color:"white"}}>Description</label>
                    <input type="text" name="body" value={body} onChange={handleInputChange} placeholder="Description"/>
                </div>
                <Button className="ui button" type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default AddUser