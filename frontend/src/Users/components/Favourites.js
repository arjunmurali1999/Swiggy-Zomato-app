import React from "react";

const Favourites = ({width}) => {
  return (
    <React.Fragment>
      <div className={`card  p-4 ${width?"m-4":""} h-50 text-center`} style={{ width: "auto" }}>
        <div className="card-body d-flex justify-content-center">
          <img
            src="\images\assets\omlete.jpg"
            className="img-fluid"
            style={{ height: "300px", width: "300px" }}
            alt="Favourite Restaurant"
          />
        </div>
        <h3 className="text-center">Where is the love</h3>
        <h4 className="text-secondary text-center">
          Once you favourite a restaurant it will appear here
        </h4>
      </div>
    </React.Fragment>
  );
};
export default Favourites;
