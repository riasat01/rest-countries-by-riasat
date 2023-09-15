export const getVisited = () => {
    const visited = localStorage.getItem('visited');
    return (visited ? JSON.parse(visited) : []);
}

const addToVisited = name => {
    const list = getVisited();
    list.push(name && name);
    saveToLS(list);
}

export const saveToLS = (list) => {
    const visitedList = JSON.stringify(list);
    localStorage.setItem('visited', visitedList);
}

export {addToVisited};