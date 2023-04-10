import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='flex justify-between p-8  bg-slate-100  '>
            <h2 className='text-2xl font-bold'>Job Opportunity</h2>
            <div className='text-lg font-semibold'>
                <Link className='m-2 p-2' to='/'>Home</Link>
                <Link className='m-2 p-2' to='/statistics'>Statistics</Link>
                <Link className='m-2 p-2' to='/blog'>Blog</Link>
                <Link className='m-2 p-2' to='/appliedJobs'>Applied Jobs</Link>
            </div>
            <button className=' text-white bg-sky-500 rounded-md p-2'>Start Applying</button>
        </div>
    );
};

export default Navigation;



