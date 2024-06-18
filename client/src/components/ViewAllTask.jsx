import { useState,useEffect } from "react"
import Navigation from "./Navigation";
const ViewAllTask=()=>{
    const[taskList,setTaskList]=useState([])
    useEffect(()=>{
        const allTask=async()=>{
            try{
                const res= await fetch("http://localhost:3000/api/ethereum/view-all-task",{
                    method:"GET",
                    headers:{
                       "Content-Type":"application/json"
                    }
                })
                const data=await res.json();
                if(data.status==200){
                    console.log(data.tasklist)
                    setTaskList(data.tasklist)
                }
            }catch(err){
                console.error(err)
            }
        }
        allTask()

    },[])
    return<>
    <Navigation/>
    <div className="view_all_tasks">
        {taskList.map((task)=>{
            return(
                <div
                className="view_all_tasks_card"
                key={task.id}
                style={task.id!=="" && task.name!== "" && task.date!==""?{}:{display:"none"}}
                >
                 <p>{task.taskid}</p>
                <p>{task.name}</p>
                <p>{task.date}</p>
                </div>
            )
        })}
    </div>
    </>

}
export default ViewAllTask