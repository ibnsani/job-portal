import useFetch from "./useFetch";
const ApplicantsList = () => {
    const {jobs: applicants, isPending, error} = useFetch('http://localhost:8000/jobsApplicant');
    return (
        <div className="home">
            {error && <div> { error} </div> }
            {isPending && <div>Loading...</div>} 
            {applicants &&
            <div className="">
                <h2>Applicants List</h2>
                {applicants.map((applicant)=>(
                    <div className="job-preview" key = {applicant.id}>
                        {/* <Link to={`jobs/${job.id}`}>  */}
                            <h2>Applicant Name:{ applicant.applicantName }</h2>
                            <p>Applicant Email: {applicant.email}</p>
                            <p><b>Applicant DOB: {applicant.dob}</b></p>
                            
                        {/* </Link> */}
                    </div>
                ) )}
            </div>}
        </div>
    );
}
 
export default ApplicantsList;