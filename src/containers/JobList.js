import { Link } from "react-router-dom";

const JobList = ({jobs}) => {
    
    return ( 
        <div className="job-list">
            <h2>Jobs List</h2>
            {jobs.map((job)=>(
                <div className="job-preview" key = {job.id}>
                        <h2>Company: {job.company}</h2>
                        <i>{ job.title }</i>
                        <p>{job.description.substring(0,200)}...</p>
                        <span>{job.experience}</span>
                        <span>{job.type}</span>
                        <span>{job.profession}</span>
                    <Link to={`jobs/${job.id}`}> 
                        <button>VIEW MORE</button>
                    </Link>
                </div>
            ) )}
        </div>
    );
}
 
export default JobList;