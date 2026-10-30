import { Component, createContext, use, useContext, useReducer, useRef } from "react";
import { useEffect, useState } from "react";

// function Hooks() {
//     const [color, setColor] = useState('');

//     return (
//         <>
//             <h1> Selected Color is : {color} </h1>
            
//             <button type="button" onClick={( () => setColor("Pink") )}> Pink </button>

//             <button type="button" onClick={ (() => setColor("Red") )}> Red </button>

//             <button type="button" onClick={ (() => setColor("Blue") )}> Blue </button>

//             <button type="button" onClick={ (() => setColor("Yellow") )}> Yellow </button>
//         </>
//     )
// }
// export default Hooks;
//--------------------

// function Hooks() {
//     const [ car, setCar ] = useState("TATA");
//     const [ model, setModel ] = useState("Safari");
//     const [ color, setColor ] = useState("Red");
//     const [ year, setYear ] = useState("2025");

//     return (
//         <h2>Car model is {model} of {car} company with {color} color of year {year}.</h2>
//     )
// }
// export default Hooks;
//---------------------

// function Hooks() {
//     const [ car, setCar ] = useState ({

//         company : "TATA",
//         model : "Sierra",
//         color : "Red",
//         year : "2025"
//     });
//     return (
//         <h2>Car model is {car.model} of {car.company} company with {car.color} color of year {car.year}.</h2>
//     )
// }
// export default Hooks;
//----------------------

// function Hooks() {
//     const [ car, setCar ] = useState ({
//         company : "TATA",
//         model : "Sierra",
//         color : "Red",
//         year : "2025"
//     });

//     const updateModel = () => {
//         setCar((previousModel) => {
//             // return {...previousModel, model : "Safari"}
//             return {...previousModel, model : previousModel.model === "Sierra" ? "Safari" : "Sierra"}
//         });
//     }

//     return (
//         <>
//             <h2>Car model is {car.model} of {car.company} company with {car.color} color of year {car.year}.</h2>
            
//             <button type="button" onClick={updateModel}> Change Model </button>
//         </>
//     )
// }
// export default Hooks;
//------------------------------------------------------------------------

                            //useEffect

// function Hooks() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         console.log("Runs After Evey Render.");
//     });

//     return (
//         <div>
//             <h1>Count : {count}</h1>
//             <button type="button" onClick={() => setCount(count + 1)}> Increase </button>
//         </div>
//     )
// }
// export default Hooks;
//---------------------

// function Hooks() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1)
//         }, 1000);
//     }); 

//     return (
//         <h1>Rendered {count} Times!!</h1>
//     )
// }
// export default Hooks;
//--------------------

// function Hooks() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1)
//         }, 1000);
//     // });                         //Infinite Looping 
//         }, []);                    // Finite Looping

//     return (
//         <h1>Rendered {count} Times!!</h1>
//     )
// }
// export default Hooks;
//--------------------

// function Hooks() {
//     const [ count, setCount ] = useState(0);
//     const [ calculation, setCalculation ] = useState(0);

//     useEffect(() => {
//         setCalculation(() => count * 2);
//     }, [count]);

//     return (
//         <div>
//             <h2>Count : {count}</h2>
//             <button type="button" onClick={() => setCount((c) => c + 1)}> + </button>
//             <h2>Calculation : {calculation}</h2>
//         </div>
//     )
// }
// export default Hooks;
//---------------------

// function Hooks() {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         let timer = setTimeout(() => {
//             setCount((count) => count + 1);
//         }, 1000);
//         return () => clearTimeout(timer);
//     // });                                     //Infinite Times
//        }, []);                                 //Render Once
//     return (
//         <h1> Rendered Counter {count} Times!! </h1>
//     )
// }
// export default Hooks;
//---------------------------------------------------

                                // useContext

// function Hooks() {
//     const [ user, setUser ] = useState("Virat");

//     return (
//         <div>
//             <h1>Hello {user}</h1>
//             <Component2 user={user} />
//         </div>
//     );
// }

// function Component2( {user} ) {
//     return (
//         <div>
//             <h2>Component - 2</h2>
//             <Component3 user={user} />
//         </div>
//     );
// }

// function Component3( {user} ) {
//     return (
//         <div>
//             <h2>Component - 3</h2>
//             <p>Hello Again "{user}"". That User name - "{user}" comes from First component.
//                 And that is called Props Drilling.
//             </p>
//         </div>
//     )
// }
// export default Hooks;
//----------------------

// const UserContext = createContext();

// function Hooks() {
//     const [ user, setUser ] = useState("Rohit");

//     return (
//         <div>
//             <UserContext.Provider value={user}>
//                 <h2>Hello {user}</h2>
//                 <Component2 />
//             </UserContext.Provider> 
//         </div>
//     );
// }

// function Component2() {
//     return (
//         <div>
//             <h2>Component - 2</h2>
//             <p>No need of this component-2</p>
//             <Component3 />
//         </div>
//     )
// }

// function Component3() {
//     const user = useContext(UserContext);
//     return (
//         <div>
//             <h2> Component - 3</h2>
//             <h1>{`Hello  ${user} From Component - 3`}</h1>
//             <p>value fetched from Component - 1 with the help of Context.Provider and useContext.</p>
//         </div>
//     )
// }
// export default Hooks;
//---------------------

                            //useRef Hook

// function Hooks() {
//     const [ inputValue, setInputValue ] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1;
//     });

//     return (
//         <>
//             <p>Type in the Input Field</p>
//             <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//             <h2>Render Count : {count.current}</h2>
//         </>
//     )
// }
// export default Hooks;
//----------------------

// function Hooks() {

//   const inputElement = useRef();
  
//   const renderCount = useRef(0);

//   useEffect(() => {
//     inputElement.current.focus();
//   }, []);

//   renderCount.current = renderCount.current + 1;

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => inputElement.current.focus()}>
//         Focus Input
//       </button>
//       <h2>Render Count : {renderCount.current}</h2>
//     </>
//   );
// }

// export default Hooks;
//----------------------

// function Hooks() {
//     const [ inputValue, setInputValue ] = useState("");
//     const previousInputValue  = useRef("");

//     useEffect(() => {
//         previousInputValue.current = inputValue;
//     }, [inputValue] );

//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//             <h2>Current Value : {inputValue}</h2>
//             <h2>Previous Value : {previousInputValue.current}</h2>
//         </div>
//     );
// }
// export default Hooks;
//----------------------

                                //useReducer

    const initialScore = [
        {
            id: 1,
            score: 0,
            name: "Virat"
        },
        {
            id:2,
            score:0,
            name: "Rohit"
        }
    ];

    const reducer = (state , action) => {
        switch (action.type) {
            case "INCREASE": 
            return state.map((player) => {
                if (player.id === action.id) {
                    return {...player, score: player.score + 1};
                } else {
                    return player;
                }
            });
            default:
                return state;
        }
    }
    
    function Hooks() {
        const [ score, dispatch ] = useReducer( reducer, initialScore );
        
        const handleIncrease = (player) => {
            dispatch ({ type: "INCREASE", id: player.id});
        };

        return (
            <>
                {score.map((player) => (
                    <div key={player.id}>
                        <input type="button" onClick={() => handleIncrease(player)} value={player.name}/>
                        {player.score}
                    </div>
                ))}
            </>
        )
    }
    export default Hooks;