import React from 'react';
import bgImg from '../assets/images/Vector-1.png'
import bgImg2 from '../assets/images/Vector.png'
const Blog = () => {
    return (
        <div>
          <div className=' pt-6 flex justify-between bg-slate-50 relative mb-8 ' >
           <img className=' w-2/12  h-32' src={bgImg2} alt="" />
           <h2 className=' text-3xl font-bold pt-8 absolute top-0 right-0 left-0 bottom-0'>Answer of Questions</h2>
           <img className=' w-2/12  h-32 absolute     bottom-28 right-0' src={bgImg} alt="" />
           </div>



 <div className=' text-left md:px-28  bg-slate-50 font-serif py-8    text-gray-950'>
 <div className='border-2 p-4 border-red-100'>
   <p className=' font-bold  text-xl py-2'>Question-a : <span className=' font-semibold'>When should you use context API?</span></p>
  <p className=' font-bold'>Answer: <span className='  font-normal'>We use Context API to avoiding some Props.
   When Some data have to transfer in many component 
  in many nesting levels then we using Context API we can easily data transfer in many component. </span></p>
  </div>
  <div className='border-2 p-4 border-red-100'>
   <p className=' font-bold  text-xl py-2'>Question-b : <span className=' font-semibold'>What is custopm hook?</span></p>
  <p className=' font-bold'>Answer: <span className='  font-normal'>Custom  hooks is a  functions which is reuseable. Developer
  make it and it n use to add special and unique functionality to the applications.</span></p>
  </div>
  <div className='border-2 p-4 border-red-100'>
   <p className=' font-bold  text-xl py-2'>Question-c : <span className=' font-semibold'>What is useRef?</span></p>
  <p className=' font-bold'>Answer: <span className='  font-normal'>The useRef Hook is a function that accept initial value as arguments and returns a mutable ref object whose .current property is initialized with the passed argument.
   The returned object will persist for the full lifetime of the component.</span></p>
  </div>
  <div className='border-2 p-4 border-red-100'>
   <p className=' font-bold  text-xl py-2'>Question-d : <span className=' font-semibold'>What is useMemo?</span></p>
  <p className=' font-bold'>Answer: <span className='  font-normal'>
   useMemo hook is used to avoiding recall or rerender function. It memorize a value so no need to recall or rerender function.
    You simple pass in a function and an array of inputs and useMemo will
   only recompute the memoized value when one of the inputs has changed..?</span></p>
  </div>
 </div>




        </div>
    );
};

export default Blog;