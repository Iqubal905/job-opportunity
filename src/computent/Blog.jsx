import React from 'react';
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
const Blog = () => {
    return (
        <div>
          <div className=' pt-6 flex justify-between bg-slate-50 relative mb-8 ' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Applied Jobs</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>
        </div>
    );
};

export default Blog;