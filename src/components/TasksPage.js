import React,{useState} from "react";

const TasksPage = () => {
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
    
  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className=" btn btn-success m-3" onClick={formToggler}>
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
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
    </div>
  );
};

export default TasksPage;
