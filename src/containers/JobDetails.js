import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useFetch from "../hooks/useFetch";
const JobDetails = () => {
    const params = useParams();
    const history = useHistory();

  const { id } = params;
    const {jobs, error, isPending} = useFetch('http://localhost:8000/jobs/' + id);
    
    const [job, setJob] = useState({});
    const fetchApplicants = async () => {
        try {
            const req = await fetch(`http://localhost:8090/api/jobs/${id}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
            const res = await req.json();
            setJob(res)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchApplicants();
    }, []);


    const handleApply = ()=>{
        history.push('/applyjob/'+id);
    }
    return (
        <div className="job-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {job && (
                <article> 
                    <h2>{ job.company }</h2>
                    <h3>{ job.title }</h3>
                    <span><i>{ job.type }</i></span>
                    <span><i>{ job.experience }</i></span>
                    
                    <div> { job.description }</div>
                     <button onClick={handleApply}>Apply Now</button>
                </article>
            )}
        </div>
    );
}
 
export default JobDetails;