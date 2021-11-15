import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [company, setCompany] = useState('');
    const [tag, setTag] = useState('online');

    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {title, body,company,tag}
        console.log(data);
        setIsPending(true);
        fetch('http://localhost:8000/jobs',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('new job added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>POST A NEW JOB</h2>
            <form onSubmit = {handleSubmit}>

                <label>COMPANY NAME:</label>
                <input type="text" 
                required
                value={company}
                onChange = {(e)=>setCompany(e.target.value)}/>

                {/* <label>COMPANY LOGO:</label>
                <input type="text" 
                required
                value={company}
                onChange = {(e)=>setCompany(e.target.value)}/> */}

                <label>JOB TITLE:</label>
                <input type="text" 
                required
                value={title}
                onChange = {(e)=>setTitle(e.target.value)}/>
                <label>JOB DESCRIPTION:</label>
                <textarea
                required
                value={ body }
                onChange={(e)=>setBody(e.target.value)}>
                </textarea>

                <label>Tag:</label>
                <select
                value={tag}
                onChange={(e)=>setTag(e.target.value)}>
                    <option value="online">Online</option>
                    <option value="online">Fulltime</option>
                </select>
                {!isPending && <button>ADD JOB</button>}
                {isPending && <button disabled>Adding Job...</button>}
                <p>{ title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}
 
export default Create;