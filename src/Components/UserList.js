import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import UserCard from './UserCard';
const UserList = () => {
    const[data,setData]=useState()
    const[loading,setLoading]=useState(true)
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setData(res.data))
    .then (()=>setLoading(false))
    }, [])
    console.log(data)
  return (
    <div>
    {loading?
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        :data.map((el)=><UserCard el={el} key={el.id}/>)
    }
    </div>
  )
}

export default UserList
