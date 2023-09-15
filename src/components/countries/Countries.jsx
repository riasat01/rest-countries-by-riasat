import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'
import { addToVisited, getVisited, saveToLS } from "../utilities/utilities";
import Visited from "../visited/Visited";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const [list, setList] = useState([]);
    const handleList = officialName => {
        const countryList = [...list, officialName];
        setList(countryList);
        addToVisited(officialName);
    }

    // getting data from local storage

    const [visited, setVisited] = useState([]);

    useEffect(() => {
        let visitedCountry = getVisited();
        // visitedCountry = [...visitedCountry, ...list];
        setVisited(visitedCountry);
    }, [list])

    return (
        <div>
            <Visited visited={visited} countries={countries}></Visited>
            <h3>{countries.length}</h3>
            <div className="box-container">
                {
                    countries.map(country => {
                        return <Country
                            key={country.cca3}
                            country={country}
                            handleList={handleList}></Country>
                    })

                }
            </div>
        </div>
    );
};

export default Countries;