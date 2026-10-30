import { useState } from "react";

function kwtohp(kw) {
    return kw * 1.36;
};

function Car() {

    const myobj = {
        name: "TATA",
        model: "Safari 7OO",
        color: "Red"
    };

    const budget = 1000000;
    let amount = 5000000;
    let a = "Mahindra";
    if (budget > amount) {
        a = "TATA";
    }

    const myfunction = () => {
        return alert(`Car company is ${myobj.name} and model is ${myobj.model} and color is ${myobj.color}.`);
    }

    const mystyles = {
        color: "red",
        backgroundColor: "pink",
        width: "30rem",
        margin: "auto"
    };

    const x = "myclass";

    const hp =218 * 1.36;
    return (
        // <div className={mystyles}>
        // <div className={x}>
        <div className="myclass">
            <h2> Car </h2>
            <p> It has {218 * 1.36} horse Power. </p>
            <p> It has {hp} horse power. </p>
            <p> It has {kwtohp(218)} horse power. </p>
            <p> Car company is {myobj.name} and model is {myobj.model} and color is {myobj.color}. </p>
            <button onClick={myfunction}> Click </button>
            <button onClick={myfunction} disabled={true}> Click </button>
            
            <h2> {a} </h2>
            <h2> {(budget) > amount ? "TATA" : "Mahindra"} </h2>



        </div>
    )
}
export default Car;
//------------------------------------------------

// function CarList() {
//     const [ car, setCar ] = useState("");
//     const [ list, setList ] = useState([]);

//     const addCar = () => {
//         if (car.trim() === "") return;

//         setList([...list, car]);
//         setCar("");
//         console.log(car);
//     };

//     return (
//         <div style={{backgroundColor: "aqua", width: "20rem",
//              height: "20rem", marginLeft: "20rem"}}>
//             <h3 style={{color: "black"}}>Car List</h3>
//             <input 
//                 type="text"
//                 value={car}
//                 onChange={(e) => setCar(e.target.value)}
//                 placeholder="Ener Car Name"
//             />

//             <button onClick={addCar}> Add </button>

//             <ul style={{listStyle: "none", padding: 0, textAlign: "center"  }}>
//                 {list.map((item, index) => (
//                     <li key={index}> {item} </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default CarList;
//------------------------------------------------

// // function Student(props) {
// function Student({ name, age, city }) {
//     return (
//         <div>
//             {/* <h3> Name : {props.name}</h3> */}
//             <h3> Name : {name}</h3>
//             <h3> Age : {age}</h3>
//             <h3> City  : {city}</h3>
//         </div>
//     )
// }
// export default Student;
//------------------------------------------------------------

// function Fruits() {
//     const fruitList = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

//     return (
//         <ul>
//             {fruitList.map((fruits) => { return <div> {fruits.toUpperCase()} </div>})}
//         </ul>
//     );
// }   
// export default Fruits;
//---------------------------------------------------------------

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//         <div>
//             <h1>Hello Counter</h1>
//              <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}> Increase : + </button>
//             <button onClick={() => setCount(count - 1)}> Decrease : - </button>
//             <h3>Your total count is {count}</h3>
//         </div>
//     )
// }
// export default Counter;