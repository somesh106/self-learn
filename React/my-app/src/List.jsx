


function List() {
    const cars = [
        {id: 1001, brand: 'TaTa'},
        {id: 1002, brand: 'BMW'},
        {id: 1003, brand: 'Audi'}
    ];
    return (
        <ul>
            {cars.map((car, id) => <li key={car.id}> {car.brand} {car.id} </li>)}
        </ul>
    )
}
export default List;

//-------------

// function List() {
//     const cars = ["TATA","Mahindra", "BMW", "Benz"];
//     return (
//         <ul>
//             {cars.map((car, index) =>  <li key={index}> {car} and {index}</li>)}
//         </ul>
//     )
// }
// export default List;
//--------------

// const fruitlist = ["apple", "banana", "kiwi", "orange"];

// function List() {
// // const fruitlist = ["apple", "banana", "kiwi", "orange"];

//     return (
//             <ul>
//                 {fruitlist.map( fruit => 
//                     <li key={fruit}> {fruit} </li>
//                 )}
//             </ul>
//     );
// }
// export default List;