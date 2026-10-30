function Vehicle(props) {
    return ( <h2> This is {props.brand} </h2>)
}
function Garage() {
    return (
        <>
            <p> Cars in the Garage is: </p>
            <Vehicle brand="TATA" />
            <Vehicle brand="BMW" />
        </>
    )
}
export default Garage;
//--------------------------------------------------------

// function Component() {
//     return ( <h2> This is Component-1. </h2>)
// }
// function Component2() {
//     return (
//         <>
//             <p> It is Component-2. Component-1 called here inside Component-2.</p>
//             <Component />
//             <Component />
//         </>
//     )
// }
// export default Component2;
//----------------------------------------------------------
// function Bikes(props) {
//     return ( <h2> Bike Price is : {props.price}. </h2>)
// }
// export default Bikes;