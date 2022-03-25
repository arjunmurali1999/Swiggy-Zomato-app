import {React,useContext} from "react";
import Homepagenav from "../components/Homepagenav.js";
import Footer from "../components/Footer.js";
import Restaurants from "../../data/restaurantdata";
import BGimage from "../components/BGimage.js";
import Listofitems from "../components/Listofitems"
import LoginContext from "../contexts/LoginContext"
function Homepage({responsivewidth}) {
  const {name}=useContext(LoginContext)
  return (
    <div>
      <main>
        <Homepagenav name={name} width={responsivewidth}></Homepagenav>
      </main>
      <div>
        <BGimage restaurant={Restaurants}  />
        <Listofitems/>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Homepage;
