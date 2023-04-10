import React, { useEffect, useState } from 'react';
import Header from './Header';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import Featured from './Featured';

const Homes = () => {

    const features = useLoaderData()

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
  <div className='m-6 p-6' >
  <h2 className=' text-3xl font-bold'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

    <div className='flex justify-between'>    
    {
jobs.map(job => <Category
    key={job.id}
   job={job}
></Category>)
     }
    </div>


    <div className='flex justify-between '>    
    {
features.map(feature => <Featured
    feature={feature}
></Featured>)
     }
    </div>

   </div>

          
        </div>
    );
};

export default Homes;