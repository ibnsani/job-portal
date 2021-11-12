import { Link } from "react-router-dom";

const JobList = ({jobs}) => {
    
    return ( 
        <div className="job-list">
            {/* <div className="search">
                <form>
                    <input type="text" />
                    <button>Saerch</button>
                </form>
            </div> */}
            <h2>Jobs List</h2>
            {jobs.map((job)=>(
                <div className="job-preview" key = {job.id}>
                        <h2>Company: {job.company}</h2>
                        <i>{ job.title }</i>
                        <p>{job.body.substring(0,200)}...</p>
                        <span>{job.tag}</span>
                    <Link to={`jobs/${job.id}`}> 
                        <button>VIEW MORE</button>
                    </Link>
                </div>
            ) )}
        </div>
    );
}
 
export default JobList;