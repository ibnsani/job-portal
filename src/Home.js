
import JobList from './JobList';
import useFetch from './useFetch';
//npx json-server --watch data/db.json --port 8000
const Home = () =>{
    const {jobs, isPending, error} = useFetch('http://localhost:8000/jobs');
    
    return(
        <div className="home">
             {error && <div> { error} </div> }
            {isPending && <div>Loading...</div>} 
            {jobs && <JobList jobs={jobs} />}
            
        </div>
    )
}
export default Home;