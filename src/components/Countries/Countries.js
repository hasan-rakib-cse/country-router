import React from "react";
import {Link} from 'react-router-dom'

const Countries = (props) => {
    const countriesStyle = {
        border: '1px solid red',
        padding: '20px',
        margin: '10px 30px',
        borderRadius: '6px'
    }

    const {name, capital} = props.country
    const mainName = name.common
    return(
        <div style={countriesStyle}>
            <h3 style={{marginTop: '0'}}>Name: {mainName}</h3>
            <p>Capital: {capital}</p>
            <Link to={`/country/${mainName}`}><button>Description of {mainName}</button></Link>
        </div>
    )
}

export default Countries;