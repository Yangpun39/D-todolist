import { Link } from "react-router-dom"
const Navigation=()=>{
    return(
        <header>
            <div className="logo">TODO </div>
            <nav>
                <ul>
                <li>
                        <Link className="nav_link" to="/">Wallet</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/view-all-task">View All Tasks</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/create-task">Create Tasks</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/view-task">View Tasks</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/update-task">Update Tasks</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/delete-task">Delete Tasks</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navigation