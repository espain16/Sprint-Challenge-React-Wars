import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react'; 
import CharacterMap from './components/CharacterMap';

const App = () => {

  const [state,setState] = useState({
    gender: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    species: ''
  });


  useEffect(()=>{
    fecthSwapi();
  }, []);

  function fecthSwapi(){
    axios.get( 'https://swapi.co/api/people/')
    .then((res)=>{
      console.log('My data', res.data)
      setState(res.data);
    })
    .catch(error=> console.log(error))
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 

  return (
    <div className="App">
    <Container>
      <h1 className="Header">React Wars</h1>
      <Divider />
        <CharacterMap />
      </Container>
    </div>
  );
}

export default App;
