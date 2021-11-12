import { useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const ApplyJob = () => {
    const params = useParams();
    const history = useHistory();
    const {id} = params;
    const {jobs, error, isPending} = useFetch('http://localhost:8000/jobs/' + id);

    const [applicantName,setApplicantName] = useState();
    const [email,setEmail] = useState();
    const [dob,setDob] = useState();
    const [qualification,setQualification] = useState();

    const handleSubmitApply = (e) =>{ 
        e.preventDefault();

        const jobId = id;

        const data = {jobId,applicantName, email,dob,qualification}
        console.log(data);
        // setIsPending(true);
        fetch('http://localhost:8000/jobsApplicant',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('new job added');
            //setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="apply-job">

            {isPending && <div>Loading...</div>}

            {error && <div>{error}</div>}
            {jobs && (     
                <article>
                    <h1>You Are Applying For { jobs.title } Posted by  <i>{jobs.company}</i></h1>
                
                <div className="create">
                    <form onSubmit={handleSubmitApply}>

                        <input type="hidden" 
                        required
                        value={jobs.title}
                        />

                        <label>Applicant Name</label>
                        <input type="text" 
                        required
                        value={applicantName}
                        onChange = {(e)=>setApplicantName(e.target.value)}/>

                        <label>Email</label>
                        <input type="text" 
                        required
                        value={email}
                        onChange = {(e)=>setEmail(e.target.value)}/>

                        <label>Date Of Birth</label>
                        <input type="date" 
                        required
                        value={dob}
                        onChange = {(e)=>setDob(e.target.value)}/>

                        <label>Qualification</label>
                        <input type="text" 
                        required
                        value={qualification}
                        onChange = {(e)=>setQualification(e.target.value)}/>
                        <button>Submit Application</button>
                    </form>
                </div>
                </article>
            )}
        </div>
    );
}
 
export default ApplyJob;