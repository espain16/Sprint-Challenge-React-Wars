import React from 'react';
import Characters from './Characters';

const CharacterMap = props => {
    return(
        <div>
            {props.state.map((character, index) =>{
                return(
                    <Characters character={charcter} key={i}/>
                )
            })}
        </div>
    )
}

export default CharacterMap;