import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TasksPage from './components/TasksPage';
import {connect} from 'react-redux'


function App(props) {
  return (
    <>
     <TasksPage tasks={props.tasks}/>
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
