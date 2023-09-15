const Visited = ({ visited, countries }) => {
    const visitedList = [];
    for (const naam of visited) {
         visitedList.push(countries.find(country => country.name.official === naam))
    }
    // console.log(visitedList);
    const style = {
        display : 'grid',
        gridTemplateColumns : "1fr 1fr 1fr 1fr",
        gap : '4px'
    }
    return (
        <div>
            <h3>Visited countries</h3>
            <ol>
                {
                    visited.map((name, index) => <li key={index}>{name}</li>)
                }
            </ol>
            <ol  style={style}>
                {
                    visitedList.map((country, idx) => <li key={idx}><img style={{width: '200px'}} src={country?.flags.png}></img></li>)
                }
            </ol>
        </div>
    );
};

export default Visited;