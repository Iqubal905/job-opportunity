import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utility/fakeDb';
import { useLoaderData } from 'react-router-dom';
import SaveJobs from './SaveJobs';
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
const AppliedJobs = () => {
    const [storeJob, setStoreJob] = useState([])
    const featuresData = useLoaderData()


useEffect(()=>{
    const storedJob = getShoppingCart()
    let newArray = []
    for(const id in storedJob){
 const foundJob = featuresData.find(job => job.id === id)
 if(foundJob){
    newArray.push(foundJob)
 }
    }
    setStoreJob(newArray)
    
},[])



    return (
        
        <div>

           <div className=' pt-6 flex justify-between bg-slate-50 relative mb-8 ' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Applied Jobs</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>
            {/* {storeJob.length ? 'Review applied jobs' : 'Please apply jobs empty!'} */}
         <div className='md:px-28'>

         <div className=" flex justify-end  me-5">
  <button className=" bg-slate-100 p-2  rounded-lg me-2">Fulltime</button>
  <button className=" bg-slate-100 p-2  rounded-lg">Part-Time</button>
</div>

            
         {
            storeJob.map(singleStore => <SaveJobs
                key={singleStore.id}
                singleStore={singleStore}
                ></SaveJobs>,
                   )
           } 
         </div>
         
        </div>
    );
};

export default AppliedJobs;