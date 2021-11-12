import { useParams, Link, useHistory } from 'react-router-dom';

import useFetch from "./useFetch";
const JobDetails = () => {
    const params = useParams();
    const history = useHistory();

  const { id } = params;
    const {jobs, error, isPending} = useFetch('http://localhost:8000/jobs/' + id);
    
    // const handleDelete = ()=>{
    //     fetch('http://localhost:8000/jobs/' + jobs.id, {
    //         method: 'DELETE'
    //     }).then(()=>{
           
    //     })
    // }

    const handleApply = ()=>{
        history.push('/applyjob/'+id);
    }
    return (
        <div className="job-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {jobs && (
                <article> 
                    <h2>{ jobs.company }</h2>
                    <h3>{ jobs.title }</h3>
                    <span><i>{ jobs.tag }</i></span>
                    
                    <div> { jobs.body }</div>
                    {/* <button onClick={handleDelete}>Delete</button> */}
                     <button onClick={handleApply}>Apply Now</button>
                    {/* <Link to={`ApplyJobs/${jobs.id}`}>
                        <button>Apply</button>
                    </Link> */}
                </article>
            )}
        </div>
    );
}
 
export default JobDetails;