import { use, useState, useTransition } from "react"


// function Transition() {
//         const [text, setText] = useState('');
//         const [results, setResults] = useState('');
//         const [isPending, startTransition] = useTransition();

//     const handleChange = (e) => {
//         setText(e.target.value);
    
//         startTransition( () => {
//             setResults(e.target.value);
//         })
//     }

//     return (
//         <div>
//             <input value={text} onChange={handleChange} />
//             {isPending ? <p> Loading... </p> : <p>Search result for : {results}</p>}
//         </div>
//     );
// }

// export default Transition;
//-----------------------------------

function SearchResults({ query }) {
    const items = [];
    if(query) {
        for(let i=0; i<20; i++) {
            items.push( <li key={i}> Result for {query} - {i} </li>);
        }
    }
    return <ul> {items} </ul>
}

function Transition() {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        setInput(e.target.value);
        
        startTransition (() => {
            setQuery(e.target.value);
        console.log(e);

        })
    }
    

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type to Search..."
            />
            {isPending && <p>Loading Result...</p>}
            <SearchResults query={query} />
        </div>
    );
}
export default Transition;