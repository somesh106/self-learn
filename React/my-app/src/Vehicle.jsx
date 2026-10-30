import React from "react";


class Parent extends React.Component{
    constructor() {
        super();
        console.log("Parent Constructor");
    }
    render() {
        return ( <h2> Parent Component. </h2>)
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log("Child Constructor");
    }
    render() {
        return ( <h2> Child Component. </h2>)
    }
}
new Child();
export default Child;



//------------------------------------------------------

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color : "red"};
//     }
//     render() {
//         return ( <h2> Component Constructor with Super(). {this.state.color} </h2>)
//     }
// }
// export default Car;
//-----------------------------------------------------

// class Car extends React.Component {
//     render() {
//         return (
//             <h2> Class Component </h2>
//         )
//     }
// }
// export default Car;
//------------------------------------------------------

// function Vehicle() {
//     return (
//         <h3> Vehicle.jsx file Data </h3>
//     )
// }
// export default Vehicle;