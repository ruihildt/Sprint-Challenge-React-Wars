import React from 'react';
import Films from './Films';

export default function Character({char}) {

    return(
        <div key={char.created}>
            <h1>{char.name}</h1>
            <div>
                <p>Gender: {char.gender}</p>
            </div>
            <div>
                <p>Birth Year: {char.birth_year}</p>
            </div>

            <div>
                <a href={char.url}>URL</a>
            </div>

            <div>
                <p>Appearances</p>
                <Films
                films={char.films}/>
            </div>

            <h2>Physical Features</h2>
            <div>
                <p>Mass: {char.mass}</p>
            </div>

            <div>
                <p>Height: {char.height}</p>
            </div>

            <div>
                <p>Eye color: {char.eye_color}</p>
            </div>

            <div>
                <p>Hair Color: {char.hair_color}</p>
            </div>

            <div>
                <p>Skin Color: {char.skin_color}</p>
            </div>

            <h2>Background</h2>
            <div>
                <p>Home World: {char.homeworld}</p>
            </div>


        </div>
    )
}