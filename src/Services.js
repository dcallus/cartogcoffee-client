import { dataBase } from './data/db';

const baseURL = "http://localhost:5000/api/coffees/"

export const getCoffees = () =>  {
    return dataBase;
};

// export const postCoffee = (payload) =>  {
//     return fetch(baseURL,  {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: {'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// };

// export const deleteCoffee = (id) =>  {
//     return fetch(baseURL + id, {
//         method: 'DELETE'
//     })
// };