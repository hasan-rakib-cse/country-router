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

    const {capital, region, area, population, continents} = country;
    const {name:{official}} = country;
    
    // get the value of currency. 
    const {name, symbol} = country.currencies[Object.keys(country.currencies)[0]]

    //   const name = country.currencies ? `${ country.currencies[Object.keys(country.currencies)[0]].name }` : "" ;

    return(
        <div>
            <p><b>Country Name:</b> {country.name.common}</p>
            <p><b>Official Name :</b> {official}</p>
            <p><b>Capital: </b>{capital}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Area: </b>{area}</p>
            <p><b>Population: </b>{population}</p>
            <p><b>Continents: </b>{continents}</p>
            <p><b>Currencies: </b>{name}</p>
            <p><b>Currency Symbol: </b><span style={{fontSize: '30px'}}>{symbol}</span></p>
        </div>
    )
}

export default Country;