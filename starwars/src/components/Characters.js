import React from 'react';
import { Card } from 'semantic-ui-react';





const Characters = props => {
console.log(props.character);
// if(!props.character)return <p>loading</p>
    return(
      <div className="character">
      <Card color="green">
        <h3>{props.character.name}</h3>
        <h3>{props.character.birth_year}</h3>
      </Card>
      <br/>
      </div>  
    )

}


export default Characters;