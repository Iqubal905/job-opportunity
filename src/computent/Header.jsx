import React from 'react';
import myImg from '../assets/images/img.png'
const Header = () => {
  return (
    <div>
      <div className="md:flex justify-between py-10   md:px-28    bg-slate-50">
              <div className=' text-left'>
                <h2 className=' md:text-6xl text-2xl p-2 '> One Step <br /> Closer To Your  <br /><span className='text-sky-500'>Dream Job</span></h2>
                <p className=' p-2 md:mr-64 text-gray-500' >Explore thousands of job opportunities with all the information you need. 
                Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className=' text-white bg-sky-500 rounded-md p-2 mt-3'>Get Started</button>
              </div>
              <div>
                <img src={myImg} alt="" />
                
              </div>

           </div>
    </div>
  );
};

export default Header;