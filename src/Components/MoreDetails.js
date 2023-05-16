import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';



const MoreDetails = () => {
    const {id}=useParams()
    const [user,setUser]=useState()
    const[loading,setLoading]=useState(true)
   
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        .then((res)=>setUser(res.data))
        .then (()=>setLoading(false))
        }, [])
      
  return (
    <div>
    {loading?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
            :<Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.address.geo.lat}</Card.Subtitle>
              <Card.Text>
              {user.address.geo.lng}
              </Card.Text>
              
            </Card.Body>
          </Card>
        }
        
    </div>
  )
}

export default MoreDetails
