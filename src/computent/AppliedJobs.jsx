import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utility/fakeDb';
import { useLoaderData } from 'react-router-dom';
import SaveJobs from './SaveJobs';

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


console.log(storeJob);


    return (
        
        <div>
           {
            storeJob.map(singleStore => <SaveJobs
            key={singleStore.id}
            singleStore={singleStore}
            ></SaveJobs>,
              
            )
           } 
         
        </div>
    );
};

export default AppliedJobs;