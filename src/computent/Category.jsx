import React from 'react';

const Category = ({job}) => {
    const {img, category, number_job} = job
    
    return (
        <div className='  bg-slate-50 p-6  my-16 text-center '>
           
            <img className=' bg-stone-100 p-2 text-center inline' src={img} alt="" />
            <h2 className='pt-4'>{category}</h2>
            <p className=' text-gray-500'>{number_job}</p>
        </div>
    );
};

export default Category;