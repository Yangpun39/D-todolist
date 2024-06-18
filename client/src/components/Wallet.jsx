import Web3 from "web3"

// import ProTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import ABI from './ABI.json'
const Wallet=({saveState})=>{
    const navigateTo=useNavigate();
    const connectWallet= async()=>{
        try{
            console.log(Web3)
            if(window.ethereum){
                const web3=new Web3(window.ethereum)
                const accounts= await window.ethereum.request({
                    method:"eth_requestAccounts"
                })
                const contractAddress= "0xf8a21ac7f173f3Fc5C399544A95a8241f5073358"
                const contract= new web3.eth.Contract(ABI,contractAddress)
                saveState({web3:web3,contract:contract,account:accounts[0]})
                navigateTo("/view-all-task")
            }else{
                throw new Error
            }
        }catch(error){
            console.error(error)
        }
    }
    return<>
    <div className="wallet_header">
        <span>Welcome To</span> <p>TODO</p>
    </div>
    <div className="connect_wallet_section todo_btn">
       <p>Please connect metamask wallet to access the app</p>
        <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    </>
// Wallet.propTypes={
//     saveState:ProTypes.func.isRequired,
// };

}
export default Wallet