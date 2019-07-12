import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react'; 
import CharacterMap from './components/CharacterMap';
import Characters from './components/Characters';

const App = () => {

  const [swapiState,setSwapiState] = useState([{
    name: '',
    birth_year: '',
    species:['']
  }]);

console.log(swapiState);
  useEffect(()=>{
    fecthSwapi();
  }, []);

  function fecthSwapi(){
    axios
    .get( 'https://swapi.co/api/people/')
    .then((res)=>{
      console.log('My data', res.data)
      setSwapiState(res.data.results);
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
        <CharacterMap characters={swapiState}/>
        
      </Container>
    </div>
  );
}

export default App;
