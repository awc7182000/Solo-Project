import React, {useState,useEffect} from 'react';
import {Link,navigate} from '@reach/router';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Cropped from './Cropped.png'
import Heart from './Heart.png'

export default(props) => {
    const[name,setName] = useState([]);
    const[event,setEvent] = useState([]);
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState();
    const[address,setAddress] = useState("");
    const[volunteers,setVolunteers] = useState([]);
    const annual = () => {
        navigate('/admin/5fa736c5d625d83c6462769a')
        window.location.reload(false);
    }
    const bubble = () => {
        navigate('/admin/5fa497bb0bb3d50fec1a8d5b')
        window.location.reload(false);
    }
    const golf = () => {
        navigate('/admin/5fa735eed625d83c64627699')
        window.location.reload(false);
    }
    const courier = () => {
        navigate('/admin/5fa73922d625d83c6462769d')
        window.location.reload(false);
    }
    const office = () => {
        navigate('/admin/5fa73713d625d83c6462769b')
        window.location.reload(false);
    }
    const raiser = () => {
        navigate('/admin/5fa73749d625d83c6462769c')
        window.location.reload(false);
    }

    useEffect(() => {
        console.log(props.id);
        axios.get('http://localhost:8000/api/events/'+props.id)
        .then(res => {
            setEvent(res.data.Event)
            setVolunteers(res.data.Event.volunteers)
            
        })
    },[])

    const deleteVol = (e) => {
        event.volunteers.pop({name:name,email:email,phone:phone,address:address})
        axios.put('http://localhost:8000/api/events/update/'+props.id,event)
        .then( res => {
            window.location.reload(false);
        })
    }
    

    return(
        <div>
            <header style={{backgroundColor:" #3e2e67"}}className="view">
            <img className="mainlogo"src = {Heart}/>
            <img  className="mainlogo2"src={Cropped}/>
            <Link to="/admin/">Back to events</Link>
            <br/>
            </header>
    <ButtonGroup style={{borderColor:'#6a6d6d'}} size="lg" className="mb-2">
    <Button onClick={bubble}style={{backgroundColor:'#57c1cf',border:0}}>Bubble Blast</Button>
    <Button onClick={golf}style={{backgroundColor:'#57b549',border:0}}>Golf Event</Button>
    <Button onClick={annual}style={{backgroundColor:'#655a9f',border:0}}>Annual Event</Button>
    <Button onClick={office}style={{backgroundColor:'#3e2e67',border:0}}>Office Admin</Button>
    <Button onClick={courier}style={{backgroundColor:'#fbbc00',border:0}}>Kindness courier</Button>
    <Button onClick={raiser}style={{backgroundColor:'#bb368b',border:0}}>Fundraiser</Button>
    </ButtonGroup>
    <h2 style={{marginTop:20}}>Volunteers for {event.name}</h2>

    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>address</th>
      <th>actions</th>
    </tr>
  </thead>
  {volunteers.map((volunteer,idx) => (
  <tbody>
    <tr>
      <td>{volunteer.name}</td>
      <td>{volunteer.email}</td>
      <td>{volunteer.phone}</td>
      <td>{volunteer.address}</td>
      <td><Button onClick={deleteVol.bind(this,volunteers[idx].phone)}>Delete</Button></td>
    </tr>
  </tbody>
   ))}
</Table>
        </div>
    )
}