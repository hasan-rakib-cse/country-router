import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Countries from '../Countries/Countries'

const Home = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])


    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Home</h1>
            {countries.map(country => <Countries key={uuidv4()} country={country} />)}

        </div>
    )
}

export default Home;