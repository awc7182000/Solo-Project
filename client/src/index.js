import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import {navigate} from '@reach/router';

const domain= "dev-ra5j-ial.us.auth0.com";
const clientId = "cdcd3FbdmZFzDJQdvJJ6JzNADeu9WHkP";
const onRedirectNavigate = () => {
  navigate('/admin/')
}


ReactDOM.render(
  <Auth0Provider domain={domain}clientId={clientId}redirectUri={window.location.origin} onRedirectCallback={onRedirectNavigate}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

