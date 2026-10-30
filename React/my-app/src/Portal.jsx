import { useState } from "react";
import {createPortal} from "react-dom"
// import Portal from './App.css'

function Portal() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h1> Parent App </h1>
            <p> Modal Component [Child Component] opens here. </p>
            <button onClick={() => setOpen(true)}> Open Modal </button>

            <Modal isOpen={open} onClose= { () => setOpen(false)}>
                <h2>Modal Content</h2>
                <p> This is Child Component.</p>
            </Modal>
        </div>
    )
}

function Modal({ isOpen, onClose, children }) {
    if(!isOpen) return null;

    return createPortal (
        // <div className="portal">
        //     <div className="portal2">
        //         {children}
        //     </div>
        // </div>

        <div style={{
            // backgroundColor: 'aqua',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' }}>

             <div style={{
                background: 'aqua',
                padding: '20px',
                borderRadius: '8px' }}>
                 {children}
                 <button onClick={onClose}> Close </button>
             </div>
        </div>,
        document.body
    )
}

export default Portal;
//----------------------------------------------------------

// function Portal() {
//     return (
//         <div style={{
//         border: "2px solid black",
//         padding: "20px",
//         // width: "200px",
//         background: "aqua",
//       }}>
//             <h2> Dialog Box </h2>
//             <button onClick={onclose}> Close </button>
//         </div>
//     );
// }
// export default Portal;