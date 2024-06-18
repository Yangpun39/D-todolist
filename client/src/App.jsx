import { useState } from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTask from './components/CreateTask'
import Wallet from './components/Wallet'
import ViewAllTasks from './components/ViewAllTask'
import UpdateTask from './components/UpdateTask'
import ViewTask from './components/ViewTask'
import DeleteTask from './components/DeleteTask'
import Navigation from "./components/Navigation"
import './App.css'
function App() {
  const [state,setState]=useState({web3:null,contract:null,account:null})
  const saveState=({web3,contract,account})=>{
    setState({web3:web3,contract:contract,account:account})
  }
  
  const router= createBrowserRouter([{
    path:'/',element:<Wallet saveState={saveState}/>},
    {path:'/view-all-task',element:<ViewAllTasks/>},
    {path:'/view-task',element:<ViewTask/>}, 
    // {path:'/',element:<Navigation/>},
    {path:'/delete-task',element:<DeleteTask state={state}/>},
    {path:'/create-task',element:<CreateTask state={state}/>},
    {path:'/update-task',element:<UpdateTask state={state}/>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
