import React from 'react';

const Featured = ({feature}) => {
    const {logo, icon_location, icon_salary, title, subTitle, salary, address} = feature
    console.log(feature);
    return (
        <div className=' text-left '>
            <img src={logo} alt="" />
            <h2>{title}</h2>
            <p>{subTitle}</p>
            <div className='flex '>
                <button>Remote</button>
                <button>Full Time</button>
            </div>
            <div className='flex'>
             <div className='flex'>
            <img src={icon_location} alt="" />
             <p>{address}</p>
             </div>
             <div className='flex'>
                <img src={icon_salary} alt="" />
             <p>{salary}</p>
             </div>
            </div>
        </div>
    );
};

export default Featured;