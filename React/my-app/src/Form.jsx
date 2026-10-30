import { useState } from "react";


//Multiple Inputs

function Form() {
    const [inputs, setInputs] = useState({
        firstname: 'Virat',
        lastname: 'Kohli',
        tomato: false,
        onion: false
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value}));
        
    }

    function handleSubmit() {
        let toppings = '';
        if(inputs.tomato) toppings = toppings + 'Tomato';
        else if(inputs.onion) {
            // if(inputs.tomato) toppings = toppings + 'and';
            topping = toppings + 'Onion';
        }
        if(toppings == '') toppings = 'No Toppings';
        alert(`${inputs.firstname} ${inputs.lastname} wants a Burger with : ${toppings}`);
    }

    function handleChecked(event) {
        const target = event.target;
        const value = event.target.type === 'checkbox' ? target.checked : target.value;
        const name =target.name;
        setInputs(values => ({ ...values, [name]: value}));
    }

    return (
        <form onSubmit={handleSubmit} style={{color:"#030000"}}>
            <label>
                First Name :
                <input type="text" name="firstname" value={inputs.firstname || "" } onChange={handleChange} />
            </label>
                            {/* {error && (<p style={{ color: "red" }}>{error}</p>)} */}
            <label style={{marginLeft: "50px"}}>
                Last Name : 
                <input type="text" name="lastname" value={inputs.lastname || "" } onChange={handleChange} />
            </label>
            
            <p> Current Value : {inputs.firstname} {inputs.lastname} wants a Burger with : </p>
            
            <label> Tomato :
                <input type="checkbox" name="tomato" checked={inputs.tomato} onChange={handleChecked}/>
            </label>
            
            <label> Onion :
                <input type="checkbox" name="onion" checked={inputs.onion} onChange={handleChecked}/>
            </label>
            
            <button type="submit" > Submit </button>
        </form>
    )
}
export default Form;
//----------------------
//<Select Option>

// function Form() {
//     const [car, setCar] = useState ("");

//     const handleChange = (event) => { setCar(event.target.value); }

//     return (
//         <form>
//             <select value={car} onChange={handleChange}>
//                 <option value=""> Select Car </option>
//                 <option value="TATA"> TATA </option>
//                 <option value="Audi"> Audi </option>
//                 <option value="BMW"> BMW </option>
//                 <option value="Ford"> Ford </option>
//             </select>
//         </form>
//     )
// }
// export default Form;
//-----------------------

//<form Submit>

// function Form() {
//     const [name, setName] = useState ("");

//     function handleSubmit(event) {
//         event.preventDefault();
//         alert(name);
//         setName("");
//     }
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Enter Name : 
//                 <input type="text"
//                     value={name}
//                     onChange={(event) => setName(event.target.value)}       
//                     placeholder="Enter Your Name">
//                 </input>
//             </label>
//             <p> Your Input : {name} </p>
//             <input type="submit" />
//         </form>
//     )
// }
// export default Form;
//----------------------

//<textarea>

// function Form() {
//     const [mytxt, setMytxt] = useState ("");

//     function handleChange(e) {
//         setMytxt(e.target.value);
//     }
//     return (
//         <form>
//             <label> Write Here
//                 <textarea value={mytxt} onChange={handleChange} ></textarea>
//             </label>
//             <p>Current : {mytxt} </p>
//         </form>
//     )
// }
// export default Form;