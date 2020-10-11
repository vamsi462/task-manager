import React from "react";
// import { TASK_STATUS} from './TasksPage'
 const TASK_STATUS = ["Not Started", "In Progress", "Done"];


const Task = (props) => {
    function handleOptionsChange(e){
        props.handleStatusChange(props.task.id, e.target.value)
    }
  return (
    <>
    <form onChange={handleOptionsChange}>
        <select defaultValue={props.task.status}>
            {TASK_STATUS.map(status=>(
                <option value={status} key={status}>{status}</option>
            ))}
        </select>
    </form>
      <h2 className="card-title mt-3 text-uppercase px-2" style={{color:"#3a4"}}>
        {props.task.title}
        
      </h2>
      <p className="card-text mb-3 text-muted-bold  px-2">
        {props.task.description}
      </p>
    </>
  );
};

export default Task;
