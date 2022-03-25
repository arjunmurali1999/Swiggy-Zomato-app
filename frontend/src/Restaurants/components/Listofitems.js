import React from "react";
import axios from "axios"
const Listofitems = () => {
  const [mealtypes,setmealtypes]=React.useState([])

  React.useEffect(()=>{
    const fetchmealtypes=async()=>{
      const {data}=await axios.get('http://localhost:3002/mealtypes')
      setmealtypes(data)
    }
    fetchmealtypes()
  },[])
  return (
    <div>
      <section id="section-2" className="p-4">
        <div className="container">
          <div>
            <div className="row">
              <div id="heading" className="col-12">
                <h1
                  className="display-6 pb-3 "
                  style={{ "fontWeight": 600, color: "#192f60" }}
                >
                  Quick Searches
                </h1>
              </div>
              <div id="heading" className="col-12">
                <h2
                  className="pb-5"
                  style={{
                    "fontWeight": 500,
                    "fontSize": "25px",
                    color: "#8c96ab",
                  }}>
                  Discover restaurants by type of meal
                </h2>
              </div>
            </div>
            <div className="row">
              {mealtypes.map((mealtype)=>(
              <div key={mealtype._id} className="col-md-6 pb-4 col-sm-12 col-xs-12 col-lg-4 col-xlg-4">
                <div className="card">
                  <div className="card-body ">
                    <img
                      className="float-right img-fluid h-50 w-100"
                      src={`/images/${mealtype.image}`}
                      alt="imageofbreakfast"
                      style={{ height: "150px", width: "150px" }}
                    />
                    <div className="col">
                      <h4 className="card-title px-4 pt-4">{mealtype.name}</h4>
                      <p className="card-text px-4">
                        {mealtype.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listofitems;
