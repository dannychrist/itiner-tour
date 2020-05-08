import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import history from './utils/history';
import CreateTour from './components/CreateTour/CreateTour';
import Home from './components/Home/Home';
import { Icon } from 'react-icons-kit';
import {exit} from 'react-icons-kit/icomoon/exit';
import {enter} from 'react-icons-kit/icomoon/enter'

function App(props) {
  const { loading, user } = useAuth0();
  console.log(user)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    if (user !== undefined && !userLoggedIn) {
      
      console.log('hihihihi')
      fetch('/add-user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((data) =>{
        setUserLoggedIn(true)
      })
    }
  }, [user])
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Router history={history}>
        <NavBar 
          login={<Icon size={25} style={{color: 'white'}} icon={enter}/>}
          logout={<Icon size={25} style={{color: 'white'}} icon={exit}/>}
        />

          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/create-tour" component={CreateTour} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </Main>
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const Main = styled.div`
  margin-top: 60px;
`;

export default App;
