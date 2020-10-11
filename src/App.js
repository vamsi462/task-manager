import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TasksPage from './components/TasksPage';
import {connect} from 'react-redux'
import {editTask} from './actions'

function App(props) {

  const handleStatusChange =(id,status)=>{
    props.dispatch(editTask(id,{status}))
  }
  return (
    <>
     <TasksPage tasks = {props.tasks}
     handleStatusChange ={handleStatusChange}/>
    </>
  );
}
//to get the state in the store via  props 
const mapStateToProps  = state =>{
  return {
    tasks:state.tasks}
}
//connecting the app with store 
export default connect(mapStateToProps)(App);
