import React from 'react'
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data01 = [
        { name: 'Assignment-1', value: 50 },
        { name: 'Assignment-2', value: 59 },
        { name: 'Assignment-3', value: 57 },
        { name: 'Assignment-4', value: 60 },
        { name: 'Assignment-5', value: 53 },
        { name: 'Assignment-6', value: 60 },
        { name: 'Assignment-7', value: 60 },
        { name: 'Assignment-8', value: 60 },
      ];
      
      
    return (
        <div>

       <div className=' pt-6 flex justify-between bg-slate-50 relative mb-8 ' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Assignment Marks</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>

        <div className='flex justify-center'>
           
           <PieChart width={400} height={400}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
           </PieChart>

        </div>
        </div>
    );
};

export default Statistics;