import { act } from "react-dom/test-utils";
import { EDIT_TASK } from "../actions/types";

const intialState = [
    {
        id:1,
        title:"Learn Redux",
        description:"Let's learn react with redux today!!!",
        status: "In Progress"
    },
    {
        id: 2,
        title: "Build react-redux app",
        description: "Let's Build task manager today with redux !!!",
        status: "Done"
    },

    {
        id: 3,
        title: "Let's Learn MERN stack ",
        description: "Let's Build E-commerce with MERN stack!!!",
        status: "Not Started"
    }
]

const tasks =(state={tasks:intialState},action)=>{
    if(action.type===EDIT_TASK){
        const {payload}=action;
        return{
            tasks: state.tasks.map((task) => {
                if(task.id===payload.id){
                    return Object.assign({},task,payload.params);
                }
                return task;
            }),
            
        };
    }
    return state
}

export default tasks;