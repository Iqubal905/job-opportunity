import React from 'react';

const Category = ({job}) => {
    const {img, category, number_job} = job
    
    return (
        <div className=' text-left bg-gray-200 p-6'>
           
            <img className='bg-gray-300 p-6' src={img} alt="" />
            <h2>{category}</h2>
            <p>{number_job}</p>
        </div>
    );
};

export default Category;