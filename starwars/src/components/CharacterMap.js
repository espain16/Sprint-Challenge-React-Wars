import React from 'react';
import Characters from './Characters';

const CharacterMap = props => {
    console.log(props);
    return(
        <div>
            {props.characters.map((character, index) =>{
                return(
                    <Characters character={character} key={index}/>
                )
            })}
        </div>
    )
}

export default CharacterMap;