import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import { deleteUser, loadUser } from '../redux/actions'
import {useNavigate} from 'react-router-dom'

function Home() {
    const dispatch = useDispatch()
    const {users} = useSelector(state=>state.data) //users => users:[], from reducer state
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(loadUser())
    },[])

    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
    }

    return (
        <>
            <Card.Group className="AlignCenter feedBG">
                {users && users.map((user) => (
                    <Card className='ui card feedBG' fluid key={user.id}  >
                        <Card.Content className='content feedBG' >
                            <Card.Header className='Header feedBG' >{user.title}</Card.Header>
                            <Card className='commentText feedBG' >{user.body} </Card>
                             <Button className='ui button tiny btnColor' onClick={()=>navigate(`/edit/${user.id}`)}  >Edit</Button>
                             <Button className='ui button tiny btnColor' onClick={()=>handleDelete(user.id)}  >Delete</Button>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}

export default Home