import React from "react";
import { TASK_STATUS} from './TasksPage'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";



const Task = (props) => {
    function handleOptionsChange(e){
        props.handleStatusChange(props.task.id, e.target.value)
    }
    function RemoveTask(){
      props.handleRemoveTask(props.task.id)
    }
  return (
    <>
      <form onChange={handleOptionsChange}>
        <select defaultValue={props.task.status}>
          {TASK_STATUS.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <p
        className="card-title mt-3 text-uppercase px-2"
        style={{color: "#3a4"}}
      >
        {props.task.title}
      </p>
      <p className="card-text mb-3 text-muted-bold  px-2">
        {props.task.description}
      </p>
      <FontAwesomeIcon
       icon={faTrash}
       className="float-right m-5" 
        style={{color:"tomato",cursor:"pointer"}}
        onClick={()=>RemoveTask(props.task.id)}/>
    </>
  );
};

export default Task;
