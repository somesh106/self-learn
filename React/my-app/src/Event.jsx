function Football() {
    const shoot = (a, b) => { alert(b.type); }
    return (
        <button onClick={(event) => shoot("Goal!!", event)}> Take a Shot </button>
    )
}
export default Football;
//----------------------

// function Football() {
//     const shoot = (a) => { alert(a); }
//     return (
//         <button onClick={() => shoot("Goal")}> Take a Shot </button>
//     )
// }
// export default Football;
//----------------------

// function Football() {
//     const shoot = () => {
//         alert('Great Shot');
//     }
//     return (
//         <button onClick={shoot}> Take a Shot </button>
//     )
// }
// export default Football;
