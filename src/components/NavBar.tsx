import React, {useState} from "react";
import '../styles/NavBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {
const [openLinks, setopenLinks] = useState(false);
 
  const toggleNavBar=()=> {
       setopenLinks(!openLinks);
  }
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="leftside" id= {openLinks ? "open" : "close"}> 
        <div className="logo">
          <img src="https://th.bing.com/th/id/OIP.ISN2jdGDWfPbMmSEip8xiQHaDq?pid=ImgDet&rs=1" alt="logo" />
        </div>
        <div className="hiddenLinks">
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Latest Meals</a>
          </li>
          <li>
            <a href="">Popular Meals</a>
          </li>
        </ul>
        </div>
        </div>
       <div className="rightSide">
         <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Latest Meals</a>
          </li>
          <li>
            <a href="">Popular Meals</a>
          </li>
          
        </ul>
        <button onClick={toggleNavBar}>
          <ReorderIcon/>
        </button></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
