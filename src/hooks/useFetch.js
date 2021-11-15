import { useEffect, useState } from "react";

const useFetch = (url) => {
    const abortCont = new AbortController();
    const [jobs, setJobs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        setTimeout(()=>{
            fetch(url, {signal:abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('Coul not fetch data for the resources');
                }
                return res.json();
            })
            .then(data=>{
                setJobs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                if(err.name==="AbortError"){
                    console.log("Fetch Aborted");
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000)
        return () => abortCont.abort();
    // eslint-disable-next-line
    },[url])

    return {jobs, isPending, error}
}
export default useFetch;