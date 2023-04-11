import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
import { addToDb } from '../utility/fakeDb';




const JobDetails = () => {

   const singleId = useParams()
 
const allJobs = useLoaderData([])


const handleAddToCard = id =>{
  console.log(id);
  addToDb(id)
}

const [singlejob, setSinglejob]  = useState([])

 useEffect(()=>{
  const ele =  allJobs.find(job => job.id === singleId.jobId );
  
    setSinglejob(ele)
 },[])
 const {id, title, address,salary,description, responsibility, education, experience, icon_phone, icon_email, time, logo, location, phone, email, icon_location, icon_salary} = singlejob
 
 console.log(singlejob);

    return (
        <div>
           <div className='   pt-6 flex justify-between bg-slate-50 relative mb-8' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Job Details</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>
           
        <div className='grid md:grid-cols-3   md:mx-28  my-6'>
            <div className=' col-span-2 text-left'>
            <p className='p-1 text-gray-500'><span className='text-black text-2xl font-semibold'>Job Description:</span>{description}</p>
            <p className='p-1 text-gray-500'><span className='text-black text-2xl font-semibold'>Job Responsibility:</span>{responsibility}</p>
            <p className='p-1 text-gray-500'><span className='text-black text-2xl font-semibold'>Educational Requirements:</span>{education}</p>
            <p className='p-1 text-gray-500'><span className='text-black text-2xl font-semibold'>Experience</span>{experience}</p>
            </div>


          <div className='   text-left py-6 md:py-12 md:m-auto  bg-slate-100  p-4  rounded-lg'>
            <h2 className=' text-xl font-semibold py-4'>Job Details</h2>
            <div className='flex'>
              <p> <img src={icon_salary} alt="" /></p>
                <p><span className=' font-semibold'>Salary:</span>{salary}</p>
            </div>
            <div className='flex'>
            <img className='pr-1' src={icon_location} alt="" />
                <p> <span  className=' font-semibold'>Job Title:</span>{title}</p>
            </div>
            <h2  className=' text-xl font-semibold py-4'>Contact Information</h2>
            <div className='flex'>
              <span> <img src={icon_phone} alt="" /></span>
                <p> <span className='  font-semibold'>Phone:</span>{phone}</p>
            </div>
            <div className='flex'>
              <span> <img src={icon_email} alt="" /></span>
                <p><span  className='  font-semibold'>Email:</span>{email}</p>
            </div>
            <div className='flex'>
              <span> <img src={icon_location} alt="" /></span>
                <p> <span  className=' font-semibold'>Address:</span>{address}</p>
            </div>
            <button onClick={()=> handleAddToCard(id)} className='  w-full text-white bg-sky-500 rounded-md p-2 text-center  mt-8'>Apply Now</button>
          </div>
         
        </div>

          
            
        </div>
    );
};

export default JobDetails;