import React, { useEffect, useState } from 'react'
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const Statistics = () => {
   
      
      
    


const[marks, setMarks] = useState([])

useEffect(()=>{

fetch('assignmentMarks.json')
.then(res => res.json())
.then(data =>setMarks(data))

},[])








const cardinal = curveCardinal.tension(0.2);


    return (
        <div>

       <div className=' pt-6 flex justify-between bg-slate-50 relative mb-8 ' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Assignment Marks</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>

        <div className='flex justify-center'>
           
        <AreaChart
          width={500}
          height={400}
          data={marks}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </AreaChart>

        </div>
        </div>
    );
};

export default Statistics;