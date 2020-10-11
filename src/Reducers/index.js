const intialState = [
    {
        id:1,
        title:"Learn Redux",
        description:"Let's learn react with redux today!!!",
        status: "Done"
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
    return state
}

export default tasks;