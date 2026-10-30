import { useEffect, useRef, useState } from "react";

function Todo() {
  const inputElement  = useRef();

  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  //Add-Task
  function addTask() {
    if(input !== "") {
      setTask([...task, input]);
      setInput("");
      inputElement.current.focus();
      // console.log(task);
    } else {
      alert('Please Add a Task');
      inputElement.current.focus();
    }
  }
  //---------------

  //Edit-Task
  function editTask(index) {
    // alert(task[index]);
    setInput(task[index]);
   
   
    inputElement.current.focus();
  }
  //---------------

//Delete-Task
  function deleteTask(index) {
    // alert(task[index]);

    const updateArray = task.filter((val, idx) => idx !== index);
    setTask(updateArray)
    inputElement.current.focus();
  }

    return (
    <>
      <h2>Todo</h2>
      <p>A Daily Task Reminder</p>
      <div>
        <input onChange={(e) => setInput(e.target.value)} style={{width: "500px"}} type="text" value={input} ref={inputElement} placeholder="Enter a Task" />
        <br />
        <button type="button" onClick={addTask}> Add Task </button>
      </div>
      <div>
        <ul className="ul-style">
          {task.map((t, index) => (
            
            <li className="task-box" key={index}> 
            {index}) {t}
              <div style={{marginRight: "50px"}}> 
                
                <button className="btn" type="button" onClick={() => editTask(index)}>
                  Edit
                </button>
                
                <button className="btn" type="button" onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
    )
}
export default Todo;