import { useEffect, useState } from 'react';

const ApplicantsList = () => {
    const isPending = false, error=null;
    const [applicants, setApplicants] = useState([]);
    const fetchApplicants = async () => {
        try {
            const req = await fetch('http://localhost:8090/api/applications', {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
            const res = await req.json();
            console.log(res)
            setApplicants(res)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchApplicants();
    }, []);
    return (
        <div className="home">
            {error && <div> { error} </div> }
            {isPending && <div>Loading...</div>} 
            {applicants &&
            <div className="">
                <h2>Applicants List</h2>
                {applicants.map((applicant)=>(
                    <div className="job-preview" key = {applicant.id}>
                            <h2>Applicant Name:{ applicant.name }</h2>
                            <p>Applicant Email: {applicant.email}</p>
                            <p><b>Applicant DOB: {applicant.birth_date}</b></p>
                            <p><b>Qualification: {applicant.qualification}</b></p>
                    </div>
                ) )}
            </div>}
        </div>
    );
}
 
export default ApplicantsList;