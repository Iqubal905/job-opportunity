import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Featured = ({feature}) => {
    const {id, logo, icon_location, time, location, icon_salary, title, companyName, salary, address} = feature
  
    
    return (
        <div className=' text-left box-content  pb-4 pl-8 pr-4 pt-4  border-2 '>
            <img className='p-2' src={logo} alt="" />
            <h2 className=' font-bold  text-2xl py-2'>{title}</h2>
            <p className=' text-sm  text-gray-500'>{companyName}</p>
            <div className='flex '>
                <button className= ' border-solid border-2 border-zinc-300 p-1 mt-2 mr-2 text-sky-500' >{location}</button>
                <button className='border-solid border-2 border-zinc-300 p-1 mt-2 mr-2 text-sky-500'>{time}</button>
            </div>
            <div className='flex pt-3'>
             <div className='flex'>
            <img className='pr-1' src={icon_location} alt="" />
             <p className=' text-sm text-gray-500'>{address}</p>
             </div>
             <div className='flex'>
                <img className=' pl-2 pr-1' src={icon_salary} alt="" />
             <p className='text-sm text-gray-500'>{salary}</p>
             </div>
            </div>
           
           <button className=' text-white bg-sky-500 rounded-md p-2 mt-3'> <Link className='m-2 p-2' to={`/job/${id}`}>Job Details</Link></button>
      
       
        </div>
    );
};

export default Featured;