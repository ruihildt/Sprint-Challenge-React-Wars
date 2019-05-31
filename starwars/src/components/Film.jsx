import React from 'react';

export default function Character({ film }) {
    return (
        <li key={film}>
            {film}
        </li>
    )
}