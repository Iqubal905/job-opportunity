import React from 'react';
import myImg from '../assets/images/img.png'
const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-10   bg-slate-100">
              <div className=' text-left'>
                <h2 className=' text-6xl p-2'> One Step <br /> Closer To Your  <br /><span className='text-sky-500'>Dream Job</span></h2>
                <p className=' p-2 mr-64'>Explore thousands of job opportunities with all the information you need. 
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