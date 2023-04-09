import React, { useEffect, useState } from 'react';
import Header from './Header';

const Homes = () => {
    const[jobs, setJobs] = useState([])

    useEffect(()=>{
 
 fetch('jobcategory.json')
 .then(res => res.json())
 .then(data =>setJobs(data))
    },[])
    return (
        <div>
   <Header />
    <div>
    {
jobs.map(job => <p>{job.category}</p>)
    
     }
    </div>

          
        </div>
    );
};

export default Homes;