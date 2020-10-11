import React from "react";
import { TASK_STATUS} from './TasksPage'

const Task = (props) => {
  return (
    <>
    <form>
        <select defaultValue={props.task.status}>
            {TASK_STATUS.map(status=>(
                <option value="status" key="status">{status}</option>
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
