import { use } from "react";
import { useEffect, useState } from "react";

function Test() {

    const [ count, setCount] = useState(0);
    const [ total, setTotal] = useState(1);

    // console.log(useState());
   
    // // Varriation - 1
    // useEffect(() => {
    //     alert('Runs on each Render');
    // })

    // // Vaiation - 2
    // useEffect(() => {
    //     alert('Runs on only first Render');
    // }, []);

    // // Variation - 3
    // useEffect (() => {
    //     alert('Runs on when State is Updated');
    // }, [count]);

    // // Variation - 4
    // useEffect (() => {
    //     alert('Runs on when Count / Total is Updated');
    // }, [count, total]);

    // // Variation - 5
    useEffect(() => {
        alert('Count is Updated');  
        return () => {
            alert('Count is Un-mounted from UI - This is clean-up function.');    
        }
    }, [count]);

    function handleClickCount() {
        setCount(count + 1);
    }

    function handleClickTotal() {
        setTotal(total + 1);
    }
    return (

        <>
            {/* <input onChange={handleChange} type="text" name="text"></input> */}
            {/* <label htmlFor="text">Type something</label> */}
            
            <h1>{count}</h1>
            <br />
            <button onClick={handleClickCount}>Click me</button>

            <h1>{total}</h1>
            <br />
            <button onClick={handleClickTotal}>Click me</button>
        </>
    )
}
export default Test;