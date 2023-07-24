import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className='nav'>
        <Link to="/price">
            <div>Crytpo Prices</div>
        </Link>

        <Link to="/currencies">
        <div>Currencies</div>
        </Link>
    </div>
  );
};
    