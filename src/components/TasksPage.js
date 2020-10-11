import React,{useState} from "react";
import TaskList from "./TaskList";

const  TASK_STATUS =["Not Started","In Progress","Done"]

const TasksPage = (props) => {
    const [taskcardform, setTaskCardForm]=useState(false);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    
    const formToggler =()=>(
        setTaskCardForm(!taskcardform)
    ) 

    const handleTititleChange = (e)=>(
        setTitle(e.target.value)
    )
    const handleDescriptionChange =(e)=>(
        setDescription(e.target.value)
    )
    const renderTaskList =()=>{
        const {tasks}= props;
        return TASK_STATUS.map((status,id)=>{
            const taskStatus = tasks.filter(task => task.status === status) 
            return (
                <div key={id}>
                     <TaskList key={status} status={status} tasks ={taskStatus} />
                </div>
        )
        })  
    }
    
  return (
    <div className="container my-5">
      <div className="jumbotron py-4 row d-flex justify-content-center position-relative">
        <div className="row">
          <div className="col-md-2">
            <button className=" btn btn-success m-3" onClick={formToggler}>
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase  ">
              Task manger
            </h2>
          </div>
        </div>

        {/* inputforms */}
        {taskcardform && (
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Task Title"
                onChange={handleTititleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Task Description"
                onChange={handleDescriptionChange}
              />
            </div>
            <button className="btn btn-primary">submit</button>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative "
        style={{background: "#fa8128", color: "white"}}>
        {renderTaskList()}
      </div>
    </div>
  );
};

export default TasksPage;
