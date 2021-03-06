import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import {connect} from "react-redux";
import {editTask, createTask, deleteTask} from "./actions";

function App(props) {

  const handleStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status}));
  };

  const handleCreateTask = ({title, description}) => {
    props.dispatch(createTask({title, description}));
  };
  const handleRemoveTask = (id)=>{
    props.dispatch(deleteTask(id))
  }
  return (
    <>
      <TasksPage tasks={props.tasks} 
      handleStatusChange={handleStatusChange}
      handleCreateTask={handleCreateTask}
      handleRemoveTask={handleRemoveTask}
       />
    </>
  );
}
//to get the state in the store via  props
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
//connecting the app with store
export default connect(mapStateToProps)(App);
