//React Prop Children

function Son(props) {
    return (
        <div style={{background: 'aqua'}}>
            <h2> Son </h2>
            <p> {props.children} </p>
        </div>
    )
}
function Daughter(props) {
    const {brand, model} = props;
    return (
        <div style={{background: 'pink'}}>
            <h2> Daughter </h2>
            <p> {props.children} </p>
        </div>
    )
}
function Parent() {
    return (
        <div>
            <h1> Two Children </h1>
            <Son>
                <p>
                    This is writen in Parent Component.
                    But displayed in Son Component.
                </p>
            </Son>
            <Daughter>
                <p>
                    This is writen in Parent Component.
                    But displayed in Daughter Component.
                </p>
            </Daughter>
        </div>
    )
}
export default Parent;
//--------------------------------------

// function Car({ brand="TATA", color }) {
//     return (
//         <h2> {brand}, {color} </h2>
//     )
// }
// export default Car;
//------------------------

// function Car({ brand, color, ...rest }) {
//     return (
//         <h2> {brand}, {rest.year}, {rest.model} </h2>
//     )
// }
// export default Car;
//------------------------

// function Car(props) {
//     const {brand, model, color} = props;
//     return (
//         <h2> i have {model} of {brand} ! of {color} color. </h2>
//     )
// }
// export default Car;
//-------------------------

// function Car({ color }){
//     return (
//         <h2> Color of Car is - {color} </h2>
//     )
// }
// export default Car;
//-----------------------------------------------------------

// function Car(props) {
//     return ( <h2> I'm a {props.brand} </h2> )
// }
// function Garage() {
//     return (
//         <>
//             <h2> Who is here ? </h2>
//             <h2> <Car brand="Sierra" /> </h2>
//         </>
//     )
// }
// export default Garage;
//---------------------

// function Car(props) {
//     return ( <h2> I have {props.carlist[1]}, {props.carlist[3]}, {props.carlist[0]} and
//     {props.carlist[2]} </h2> )
// }
// export default Car;
//---------------------

// function Car(myobj) {
//     return (
//         <>
//             <h2>  I have {myobj.carinfo.name} {myobj.carinfo.model} </h2>
//             <p> of {myobj.carinfo.color} color and the year of {myobj.carinfo.year}. </p>
//         </>
//     );
// }
// export default Car;
//------------------

// function Car(props) {
//     return ( <h2> I'm a {props.brand} </h2> )
// }
//------------------
// function Car(myobj) {
//     return ( <h2> This is a {myobj.model} model of {myobj.brand} with {myobj.color} color manufactured in {myobj.year} in {myobj.country}.  </h2> )
// }
//------------------
// function Car(props) {
    // return (
        // <>
            {/* <h2> My fav Car is {props.carInfo.model} of {props.carInfo.company}. </h2> */}
            {/* <p> I also like the other cars like {props.carList[0]}, {props.carList[2]}, {props.carList[1]} */}
            {/* </p> */}
        {/* </> */}
    // )
// }