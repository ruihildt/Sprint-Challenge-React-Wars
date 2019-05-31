import React from 'react';
import Character from './Character';

export default function StarWarsChars({starwarsChars}){
    return(
        <div>
            {starwarsChars.map(char => (
                <Character
                char={char}
                key={char.created}
                />
            ))}
        </div>
    )
}