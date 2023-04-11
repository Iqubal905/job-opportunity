import React from 'react';


const SaveJobs = ({singleStore}) => {
    const { id, title} = singleStore
    return (
        <div>
          <h2>{id}</h2>
          <h2>{title}</h2>
        </div>
    );
};

export default SaveJobs;