import React, {useState,useEffect} from 'react';
import {Link, useLocation} from '@reach/router';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Mainlogo from './Mainlogo.png'
import {navigate} from '@reach/router'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Capture from './Capture.PNG'
import { v4 as uuidv4 } from 'uuid';
export default (props) => {
    const[event, setEvent] = React.useState({});
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState();
    const[address,setAddress] = useState("");
    const[whoopsie,setWhoopsie] = useState("");
    const location = useLocation();

    useEffect(() => {
      console.log(props.id);
      
      axios.get('http://localhost:8000/api/events/'+props.id)
      .then(res => {
          console.log(res.data);
          setEvent(res.data.Event);
      })
      .catch((error) => {
          console.log(error);
        })
    },[]) ;
    const onSubmitHandler = (e) => {
      e.preventDefault();
      event.volunteers.push({name:name,email:email,phone:phone,address:address})
      axios.put("http://localhost:8000/api/events/update/"+props.id,event)
      .then(res => {
          if(res.data.error) {
              console.log(res.data.error.errors);
              setWhoopsie(res.data.error.errors);
          }
          else{
              navigate('/')
          }
      })
      .catch((error) => {
          console.log(error);
      })
  }

    //on submit method get values from input fields, wrap in object {FirstName: "Ryan", etc} then add this object to volunteers for event
    //event.volunteers.push(yourObject)
    //call put on that event with updated data

    return(
        <form onSubmit={onSubmitHandler}>
            <img class ="admin" src={Mainlogo} alt="logo"></img>
            <Link className="adminLogin"to="/">Go back</Link><br/>
    <h2 >Please enter your information for {event.name}</h2>
    <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">First and Last name</InputGroup.Text>
    </InputGroup.Append>
    <FormControl onChange = {e => setName(e.target.value)}
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
    </InputGroup.Append>
    <FormControl onChange = {e => setEmail(e.target.value)}
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Phone Number</InputGroup.Text>
    </InputGroup.Append>
    <FormControl onChange = {e => setPhone(e.target.value)}
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Address</InputGroup.Text>
    </InputGroup.Append>
    <FormControl onChange = {e => setAddress(e.target.value)}
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <Button variant="success" style={{marginTop:20}} type="submit">Submit</Button>
  <h4 style={{marginTop:40}}>If you have anything else to add, contact us below!</h4>
  <img class="Events1"src={Capture} alt="footer"></img>
        </form>
    )
}