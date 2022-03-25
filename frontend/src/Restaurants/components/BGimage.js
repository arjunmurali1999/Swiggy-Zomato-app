import React from 'react'
import '../css/bgimage.css'
 const BGimage = (props) => {
    return (
        <div>
             <section id="section-1" >
            <div className="mask mask-custom container-fluid padding">
                        <div className="d-flex justify-content-center align-items-center p-4">
                            <h1 className="text-danger display-5 bg-light rounded-circle text-center h-50 p-4" id="logo" >e!</h1>
                          </div>
                          <div id="dropdown">
                            <h2 className="display-5 text-center pt-4 pb-3 text-white" >Find the best restaurants cafes and bars</h2>
                            <div className="d-flex justify-content-center row w-100" id="dropdown">
                              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 input-group-lg m-3 container" id="dropdownbutton" style={{width:"300px"}}>
                                <div className="dropdown">
                                  <button className="btn btn-secondary dropdown-toggle bg-light text-secondary btn-lg w-100" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select your location</button>
                                  <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                  {props.restaurant.map(data =>(
                                    <li key={data._id}><a className="dropdown-item" href={`/location/${data.city_name}`}>{data.locality}</a></li>
                                  ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 input-group-lg m-3 container" id="dropdownbutton" style={{width:"300px"}}>
                                <div className="dropdown">
                                  <button className="btn btn-secondary dropdown-toggle bg-light text-secondary btn-lg w-100" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Restaurants</button>
                                  <ul className="dropdown-menu col-xs-12 w-100" aria-labelledby="dropdownMenuButton1">
                                  {props.restaurant.map(data =>(
                                    <li key={data._id}> -
                                      <div className=" d-flex"><img className="m-2 rounded-circle float-left p-1" alt="restaurant img" src={data.thumb} style={{height:"50px",width:"50px"}}/>
                                        <div className="pl-2"><span><a className="dropdown-item font-weight-bold text-info" href={`/Restaurant/${data._id}`}>{data.name}</a>
                                        <p className="p-2 text-secondary">{data.locality}</p></span>
                                        </div>
                                      </div>
                                    </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
        </section>
        </div>
    )
}
export default BGimage