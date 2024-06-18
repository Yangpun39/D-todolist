const {dateclashCheck,priorityCheck} = require('../model/tasks')
const {contract}=require ('../contract/contract')
const createTask =async (req,res)=>{
    const {taskDate}=req.body;
    const task= await dateclashCheck(taskDate);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
        }else{
            res.status(200).json({status:200,message:"Task can be added"})
        }

    }catch(err){
        console.error(err)
    }

}
const updateTask =async (req,res)=>{
    const {taskDate}=req.body;
    const task= await dateclashCheck(taskDate);
    try{
        if(task!=="No Task Found"){
            res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
        }else{
            res.status(200).json({status:200,message:"Task can be added"})
        }

    }catch(err){
        console.error(err)
    }
    
}
const deleteTask =async (req,res)=>{
    try{
        const {taskId}=req.params
        const isTrue=await priorityCheck(taskId);
        if(isTrue==="task not found"){
            res.status(201).json({status:201,message:`No Task with id ${taskId}`})
        }
       else if(isTrue){
            res.status(403).json({status:403,message:"Task cannot be deleted"})
        } else{
            res.status(200).json({status:200,message:"Task can be deleted"})
        }
    }catch(err){
        console.error(err)
    }
    
}
const viewTask =async (req,res)=>{
    try{
        const {taskId}=req.params
        const task=await contract.methods.viewTask(taskId).call()
        const {id,name,date}=task
        const numId= Number(id)
        const taskobj={
          numId,name,date
        }
        res.status(200).json({status:200,taskobj,message:"Task exist"})
      }catch(err)
      {
          res.status(500).json({status:500,message:"Task does not exist"})
          console.error(err)
      }
    
}
const viewallTask =async (req,res)=>{
    try{
        const task=await contract.methods.allTask().call()
        if(task.length<0){
            res.status(400).json({status:400,message:"task list does not exists"})
        }else{
            const tasklist= task.map(({id,name,date})=>{
                const taskid=Number(id)
                return {taskid,name,date}
            })
            res.status(200).json({status:200,tasklist,message:"task exist"})
        }
    }catch(err){
        console.error(err)
    }
}
module.exports={createTask,deleteTask,viewTask,viewallTask,updateTask}