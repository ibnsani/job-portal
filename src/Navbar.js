
import { Link,useHistory } from 'react-router-dom';

const Navbar = () =>{
    const history = useHistory();
    const handleJobList = () =>{
        history.push('/applicantslist')
    }
    return(
            <div className="navbar">
                <h1>Job Portal</h1>
                <div className="links">
                    <Link to='/home'>Home</Link>
                    <Link to='/create'>Add Job</Link>
                    <button onClick={handleJobList}>Jobs Applicants</button>
                </div>
            </div>
        )
}
export default Navbar;