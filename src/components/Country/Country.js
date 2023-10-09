import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({})

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))

    }, [countryName])

    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    //         const data = await response.json();
    //         return data;
    //     }

    //     loadData().then(data => {
    //         setCountry(data);
    //     })

    // },[countryName])
    

    console.log(country)

    return(
        <div>
            <h1>Country Capital: {[country.capital]} </h1>
        </div>
    )
}

export default Country;