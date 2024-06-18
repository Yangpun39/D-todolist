import Navigation from "./Navigation"
import { useState } from "react"
const DeleteTask=({state})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };
    const {contract,account}=state
    const deleteTask = async(event)=>{
        event.preventDefault();
        const taskID=document.querySelector("#taskID").value
        try{
            const res= await fetch(`http://localhost:3000/api/ethereum/delete-task/${taskID}`,{
                method:"DELETE",
                        headers:{
                           "Content-Type":"application/json"
                        }
            })
           // console.log(account)
                 const data= await res.json()
                 console.log(data.status)
            if(data.status===200){
                    await contract.methods
                    .deleteTask(taskID).send({from:account})
                    setModalContent(
                        `Task ID ${taskID} Deleted `
                      );
                      setModalVisible(true);
            }else if(data.status===201)
             {
                   // alert(`No Task with id ${taskID}`)
                    setModalContent(`No Task with id ${taskID}`);
                setModalVisible(true);
                    
                }
            else{
                setModalContent("Priority task cannot be deleted");
                setModalVisible(true);
               // alert("Priority task cannot be deleted")
            }
    
        }catch(err){
            
           console.log(err)
        }
    }
    return<>
          <Navigation/>
          <div className="delete_task todo_btn">
          <form on onSubmit={deleteTask}>
        <label>
            ID:
            <input id="taskID"/>
        </label>
        <button type="submit">Delete Task</button>
        </form>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
        </div>
    </>

}
export default DeleteTask