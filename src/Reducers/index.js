const intialState = [
    {
        id:1,
        title:"Learn Redux",
        description:"Let's learn react with redux today!!!"
    },
    {
        id: 1,
        title: "Build react-redux app",
        description: "Let's Build task manager today with redux !!!"
    }
]

const tasks =(state={tasks:intialState},action)=>{
    return state
}

export default tasks;