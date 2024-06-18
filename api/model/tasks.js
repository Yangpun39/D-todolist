const {contract}= require('../contract/contract')
const dateclashCheck= async(taskDate)=>{
    const tasks= await contract.methods.allTask().call();
    const foundTask= tasks.find(task=>task.date===taskDate)
    if(foundTask)
        {
            return foundTask.name
        }
        return "No Task Found"
}

const priorityCheck = async (id)=>{
    const tasks = await contract.methods.allTask().call()
    let result;
    const found=false;
    tasks.map(({id1})=>{
        const taskid=Number(id1)
        if(id===taskid){
            found=true
        }
    })
    if(found){
            result=  tasks[id-1].name.includes("priority")     
    }
    else{
            result="task not found"
    }
    console.log(result)
    return result
    
}

module.exports={dateclashCheck,priorityCheck}