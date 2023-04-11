import React, { useEffect, useState } from 'react';
import Header from './Header';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import Featured from './Featured';

const Homes = () => {

     const features = useLoaderData([])



//  const [features, setFeature] = useState([])
 
// // useEffect(()=>{

// //     fetch('jobFeatured.json')
// //  .then(res => res.json())
// //  .then(data => setFeature(data))
// //   console.log(features);
// // },[])



    const[jobs, setJobs] = useState([])

    useEffect(()=>{
 
 fetch('jobcategory.json')
 .then(res => res.json())
 .then(data =>setJobs(data))

    },[])



 let test =features.slice(0, 4)
 const [slice, setSlice] = useState(test)

const handlerShowAll = () =>{
    setSlice(features)
 }

 

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

}



    {
jobs.map(job => <Category
    key={job.id}
   job={job}
></Category>)
     }
    </div>


<div className='p-4 mb-4 mt-16'>
    <h2 className=' text-3xl font-bold'>Featured Jobs</h2>
    <p className='p-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
    <div className=' grid grid-cols-2 gap-16'>    

    {Array.isArray(slice) ?
     slice.map(feature => <Featured
     key={feature.id}
    feature={feature}
></Featured>):
 null
     }
    </div>

   </div>
   <button onClick={()=>handlerShowAll()} className=' text-white bg-sky-500 rounded-md p-2  my-6'>See all Jobs</button>
          
        </div>
    );
};

export default Homes;