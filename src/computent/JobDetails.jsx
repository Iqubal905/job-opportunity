import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

     

   const id = useParams()
    console.log(id);
const allJobs = useLoaderData([])
console.log(allJobs);


const [singlejob, setSinglejob]  = useState([])

 useEffect(()=>{
  const ele =  allJobs.find(job => job.id === id.jobId );
    console.log(ele);
    setSinglejob(ele)
 },[])
    return (
        <div>
            <h2>{singlejob.title}</h2>
            <h2 className=' text-8xl'>{singlejob.id}</h2>
            <h2>{singlejob.address}</h2>
            <h2>{singlejob.salary}</h2>
        </div>
    );
};

export default JobDetails;