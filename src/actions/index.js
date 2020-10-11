//actions

import { EDIT_TASK } from "./types"
import {
  CREATE_TASK,
  DELETE_TASK
} from "./types";
import shortid from 'shortid'

export const  editTask =(id,params ={})=>{
    return {
        type:EDIT_TASK,
        payload:{
            id,
            params
        }
    }
}

export const createTask =({title,description})=>{
    return {
      type: CREATE_TASK,
      payload: {
        id: shortid.generate(),
        title,
        description,
        status: "Not Started",
      }
    };
}

export const deleteTask=(id)=>{
  return {
    type: DELETE_TASK,
    id,
  }
}