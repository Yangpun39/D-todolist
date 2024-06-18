
const express= require('express')
const cors=require('cors')
const tasks=require('./routes/routes')

//user-/apo/ethereum/create-task -> server.js->routes.js->controller.js->task.js
const app= express()
app.use(cors())
app.use(express.json())
app.use('/api/ethereum',tasks)



const port=3000
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})



//0xf8a21ac7f173f3Fc5C399544A95a8241f5073358
// const ABI= require("./ABI.json")
// const {Web3}= require("web3")

// const web3= new Web3("https://eth-sepolia.g.alchemy.com/v2/-RtsNDDNJFotMn4xJJDmPvmg3o7iYvwP")
// const contractaddress="0xf8a21ac7f173f3Fc5C399544A95a8241f5073358"
// const contract= new web3.eth.Contract(ABI,contractaddress)

// const dateclashCheck= async(taskDate)=>{
//     const tasks= await contract.methods.allTask().call();
//     const foundTask= tasks.find(task=>task.date===taskDate)
//     if(foundTask)
//         {
//             return foundTask.name
//         }
//         return "No Task Found"
// }

// const priorityCheck = async (id)=>{
//     const tasks = await contract.methods.allTask().call()
//     const result= tasks[id-1].name.includes("priority")
//     return result
// // }

// app.post("/api/ethereum/create-task",async(req,res)=>{
    // const {taskDate}=req.body;
    // const task= await dateclashCheck(taskDate);
    // try{
    //     if(task!=="No Task Found"){
    //         res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
    //     }else{
    //         res.status(200).json({status:200,message:"Task can be added"})
    //     }

    // }catch(err){
    //     console.error(err)
    // }
// })

// app.get("/api/ethereum/view-task/:taskId",async(req,res)=>{
    // try{
    //   const {taskId}=req.params
    //   const task=await contract.methods.viewTask(taskId).call()
    //   const {Id,name,date}=task
    //   const numId= Number(Id)
    //   const taskobj={
    //     numId,name,date
    //   }
    //   res.status(200).json({status:200,taskobj,message:"Task exist"})
    // }catch(err)
    // {
    //     res.status(500).json({status:500,message:"Task does not exist"})
    //     console.error(err)
    // }
// })

// app.get("/api/ethereum/view-all-task",async(req,res)=>{
    // try{
    //     const task=await contract.methods.allTask().call()
    //     if(task.length<0){
    //         res.status(400).json({status:400,message:"task list does not exists"})
    //     }else{
    //         const tasklist= task.map(({id,name,date})=>{
    //             const taskid=Number(id)
    //             return {taskid,name,date}
    //         })
    //         res.status(200).json({status:200,tasklist,message:"task exist"})
    //     }
    // }catch(err){
    //     console.error(err)
    // }
// })

// app.post("/api/ethereum/update-task",async(req,res)=>{
    // const {taskDate}=req.body;
    // const task= await dateclashCheck(taskDate);
    // try{
    //     if(task!=="No Task Found"){
    //         res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
    //     }else{
    //         res.status(200).json({status:200,message:"Task can be added"})
    //     }

    // }catch(err){
    //     console.error(err)
    // }
// })
// app.delete("/api/ethereum/delete-task/:taskId",async(req,res)=>{
    // try{
    //     const {taskId}=req.params
    //     const isTrue=await priorityCheck(taskId);
    //     if(isTrue){
    //         res.status(403).json({status:403,message:"Task cannot be deleted"})
    //     }else{
    //         res.status(200).json({status:200,message:"Task can be deleted"})
    //     }
    // }catch(err){
    //     console.error(err)
    // }
// })

