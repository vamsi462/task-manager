import {EDIT_TASK, CREATE_TASK, DELETE_TASK} from "../actions/types";

const intialState = [];

const tasks = (state = {tasks: intialState}, action) => {
        /***************************************************************************
                            if-else version 
        ***************************************************************************/
  // if(action.type===EDIT_TASK){
  //     const {payload}=action;
  //     return{
  //         tasks: state.tasks.map((task) => {
  //             if(task.id===payload.id){
  //                 return Object.assign({},task,payload.params);
  //             }
  //             return task;
  //         }),
  //     };
  // }
  // return state


        /***************************************************************************
                            switch version 
         ***************************************************************************/
  const {payload} = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          
          }
          return task;
        }),
      };
    }
    case CREATE_TASK :{
        return {
            tasks:state.tasks.concat(action.payload)
        }
        
    }
    case DELETE_TASK :{
      return{
        tasks:state.tasks.filter(task=>task.id !== action.id)
      }
    }
    
    default: return state;
  }
};

export default tasks;
