import React from 'react';
import Film from './Film';

export default function Films({ films }) {
    return (
        <div>
            <ul>
                {films.map(film => (
                    <Film
                        film={film}
                        key={film}
                    />
                ))}
            </ul>
        </div>
    )
}