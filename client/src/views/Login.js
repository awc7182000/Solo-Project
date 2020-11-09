import React from 'react'
import {Link, navigate } from '@reach/router'
import {useAuth0} from '@auth0/auth0-react'
import banner from './banner.png'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    const{loginWithRedirect, isAuthenticated} = useAuth0();
    
    if (isAuthenticated) {
        navigate('/admin/')
      }

    return (
        // !isAuthenticated && (
        <div>
            <img className="Login"src={banner} alt="logo"></img><br/>
            
            <Button style={{width:200,height:100}}variant="warning"onClick={()=> loginWithRedirect()}>Admin login</Button>{' '}
            
        </div>
    )
}

export default Login
