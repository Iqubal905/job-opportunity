import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>


<div className="navbar py-6   md:px-32  bg-slate-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className='m-2 p-2' to='/'>Home</Link></li>
      <li tabIndex={0}>  <Link className='m-2 p-2' to='/statistics'>Statistics</Link></li>
      <li> <Link className='m-2 p-2' to='/blog'>Blog</Link></li>
      <li> <Link className='m-2 p-2' to='/appliedJobs'>Applied Jobs</Link></li>
      </ul>

    </div>
    <h2 className='md:text-2xl font-bold'>Job Opportunity</h2>
  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
      <li><Link className='m-2 p-2' to='/'>Home</Link></li>
      <li tabIndex={0}>  <Link className='m-2 p-2' to='/statistics'>Statistics</Link></li>
      <li> <Link className='m-2 p-2' to='/blog'>Blog</Link></li>
      <li> <Link className='m-2 p-2' to='/appliedJobs'>Applied Jobs</Link></li>
    </ul>

  </div>
  <div className="navbar-end">
  <button className=' text-white bg-sky-500 rounded-md p-2'>Start Applying</button>
  </div>
</div>








         {/* <div className='flex justify-between py-6   px-32  bg-slate-50  '>
            <h2 className='text-2xl font-bold'>Job Opportunity</h2>
            <div className='text-lg font-semibold'>
                <Link className='m-2 p-2' to='/'>Home</Link>
                <Link className='m-2 p-2' to='/statistics'>Statistics</Link>
                <Link className='m-2 p-2' to='/blog'>Blog</Link>
                <Link className='m-2 p-2' to='/appliedJobs'>Applied Jobs</Link>
            </div>
            <button className=' text-white bg-sky-500 rounded-md p-2'>Start Applying</button>
        </div> */}
       </div>
    );
};

export default Navigation;



