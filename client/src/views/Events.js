import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Cropped from './Cropped.png'
import Heart from './Heart.png'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import mainlogo from './Mainlogo.png'
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
  <div class="Events1">
    <header className="Volunteer-top">
    <img className="mainlogo"src = {Heart} alt="heart"/>
    <img  className="mainlogo2"src={Cropped}alt="cropped"/>
    <Link className="adminLogin"to="/login/">Admin Login</Link><br/>
    <h2 className="opportunities">Volunteer Opportunities</h2>
    </header>
    <h4 style={{marginBottom:30}}>Sign up for any of these events!</h4>
    <div>
    <CardDeck >
    {events.map(event => (
        <Card>  
        <Card.Body style={{backgroundColor:"#655a9f"}}>
          <Card.Title style={{color:"white"}}>{event.name}</Card.Title>
          <Card.Text style={{color:"white"}}>
            {event.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:"#fbbc00"}}>
          <Button variant="light"onClick={navigate.bind(this,'/volunteer/'+event._id)} >Click here to sign up!</Button>
        </Card.Footer>
      </Card> 
      ))}
</CardDeck>
</div>
      <img style={{marginTop:200,width:1500}}class="footer-img"src={Capture} alt="logo"></img>
</div>
)
}