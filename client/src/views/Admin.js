import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react'
import { Link,navigate} from '@reach/router'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Cropped from './Cropped.png'
import Heart from './Heart.png'
import Button from 'react-bootstrap/Button'
import Capture from './Capture.PNG'

export default(props) => {
  const[events,setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/events/")
    .then(res => {
        console.log(res.data.Events);
        setEvents(res.data.Events);
    })
    .catch((error) => {
        console.log(error);
      })
  },[]) ;
  
return( 
  <div className="Events">
    <header className="Volunteer-top">
    <img className="mainlogo"src = {Heart}alt="heart"/>
    <img  className="mainlogo2"src={Cropped}alt="cropped"/>
    <Link to="/">Back to Event signup</Link>
    <br/>
    <h2 className="opportunities"></h2>
    </header>
    <h4 style={{marginBottom:30}}>See who signed up for each event!</h4>
    <CardDeck>
    {events.map(event => (
        <Card>  
        <Card.Body style={{backgroundColor:"lightgray"}}>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>
            {event.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={navigate.bind(this,'/admin/'+event._id)} variant="success"><small style={{color:"white"}}>Volunteer list</small></Button>
        </Card.Footer>
      </Card>
      ))}
</CardDeck> <br/>
</div>
)
}
