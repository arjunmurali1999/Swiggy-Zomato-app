import React from 'react';

function NoAddress({width}) {
  return  <React.Fragment>
  <div className={`card m-4 ${width?'w-100':'w-50'} h-50 text-center`}>
  <div className="card-body">
    <h2 className="card-title">No Address </h2>
    <img   style={{width:'200px',height:'200px'}} src="/images/assets/noaddress.jpg" alt="no order"/>
    <h4 className="card-text">Add address while checkout to display here</h4>
  </div>
</div>
</React.Fragment>;
}

export default NoAddress;
