import React from 'react';

const Characters = props => {
console.log(props.character);
// if(!props.character)return <p>loading</p>
    return(
      <div className="character">
        <h3>{props.character.name}</h3>
        <h3>{props.character.birth_year}</h3>


      </div>  
    )

}


export default Characters;