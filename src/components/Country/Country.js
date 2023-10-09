import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({})
    const [isloading, setIsLoading] = useState(true)
    // use dataLoading - data load hote late hole jate error na ase.

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
            setIsLoading(false)
        })

    }, [countryName])

    if(isloading) return <p>Loading...</p>

    const {name, capital, region, area, population, continents} = country;
    const {common} = name;
    const {name:{official}} = country;

    return(
        <div>
            <p><b>Country Name Common:</b> {common}</p>
            <p><b>Country Name Official:</b> {official}</p>
            <p><b>Country capital: </b>{capital}</p>
            <p><b>Country region: </b>{region}</p>
            <p><b>Country area: </b>{area}</p>
            <p><b>Country population: </b>{population}</p>
            <p><b>Country continents: </b>{continents}</p>
        </div>
    )
}

export default Country;