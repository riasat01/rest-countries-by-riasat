import { useState } from 'react';
import './Country.css'

const Country = ({country, handleList}) => {
    const {name, flags, population, area} = country;
    // console.log(country.name);
    const [visited, setVisited] =useState(false);
    const handleVisited = () => setVisited(!visited);
    // console.log(handleList);
    return (
        <div className='box' style={{backgroundColor:visited && 'lavender'}}>
            <h4>Name: {name?.official}</h4>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            <button onClick={() => handleList(name?.official)}>Mark as visited</button>
            <p>{visited?'Done visiting the country':'going for this'}</p>
        </div>
    );
};

export default Country;