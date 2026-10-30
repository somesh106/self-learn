function Conditional(props) {
    const isGoal = props.isGoal;
    return ( <> {isGoal ? <MadeGoal /> : <MissedGoal />} </> )
}

function MadeGoal() {
    return <h1> Goal!!!! </h1>
}

function MissedGoal() {
    return <h1> Goal Missed!!! </h1>
}
export default Conditional;
//------------------------

// function Conditional(props) {
//     return (
//         <>
//             {props.brand && <h1> Car is {props.brand} </h1>}
//         </>
//     );
// }
// export default Conditional;
//-----------------------------------------------

// function Conditional(props) {
//     const isGoal = props.isGoal;
//     if(isGoal) { return <MadeGoal /> };
//     return <MissedGoal />;
// }

// function MadeGoal() {
//     return <h1> Goal!!!! </h1>
// }

// function MissedGoal() {
//     return <h1> Goal Missed!!! </h1>
// }
// export default Conditional;