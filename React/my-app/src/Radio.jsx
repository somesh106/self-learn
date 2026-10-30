import { useState } from "react";

function Radio() {
    const [selectedFruit, setSelectedFruit] = useState ('apple');

    const handleChange = (e) => {
        setSelectedFruit(e.target.value);
    }
    const handleSubmit = (e) => {
        alert(`Selected Fruit is : ${selectedFruit}`);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="apple"
                    checked={selectedFruit === 'apple'}
                    onChange={handleChange} /> Apple
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="fruit"
                    value="banana"
                    checked={selectedFruit === 'banana'}
                    onChange={handleChange} /> Banana
            </label>
            <br />
            <label>
                <input
                type="radio"
                name="fruit"
                value="mango"
                checked={selectedFruit === 'mango'}
                onChange={handleChange} /> Mango
            </label>
            <br />
            <label>
                <input
                type="radio"
                name="fruit"
                value="kiwi"
                checked={selectedFruit === 'kiwi'}
                onChange={handleChange} /> Kiwi
            </label>
            <br />
            <button type="submit">
                Submit
            </button>
        </form>
    )
}
export default Radio;