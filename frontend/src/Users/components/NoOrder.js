import React from 'react';

function NoOrder({width}) {
  return (
    <React.Fragment>
  <div className={`card m-4 ${width?'w-100':'w-50'} h-50 text-center`}>
  <div className="card-body">
    <h2 className="card-title">No Orders to Display</h2>
    <img   style={{width:'200px',height:'200px'}} src="/images/assets/egg.jpg" alt="no order"/>
    <h4 className="card-text">Quickly order something from our premium restaurants</h4>
  </div>
</div>
</React.Fragment>);;
}

export default NoOrder;
