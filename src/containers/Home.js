
import { useEffect, useState } from 'react';
import JobList from './JobList';
const Home = () =>{
    const [jobs, setJobs] = useState([]);
    const fetchApplicants = async () => {
        try {
            const req = await fetch('http://localhost:8090/api/jobs', {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
            const res = await req.json();
            setJobs(res)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchApplicants();
    }, []);
    
    return(
        <div className="home">
            {jobs && <JobList jobs={jobs} />}
            
        </div>
    )
}
export default Home;