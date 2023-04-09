import React from 'react';

const Home = () => {
    return (
        <div>
           <div className="flex justify-between">
              <div>
                <h2>One Step <br /> Closer To Your  <br /><span>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. 
                Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className=' text-white bg-sky-500 rounded-md p-2'>Get Started</button>
              </div>
              <div>
                <img src="../assets/react.svg" alt="" />
                
              </div>

           </div>
        </div>
    );
};

export default Home;