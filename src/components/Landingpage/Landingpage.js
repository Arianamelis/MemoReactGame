import React from "react";
// import LandingBtn from "../../components/Landingpage/LandingBtn.js";
import Navbar from "../Navbar.js";
import Header from "../Header.js";
import Footer from "../Footer.js";

function LandingPage(props) {

  return (
        <div>
          <Navbar />
          
          <Header changeRoute={props.changeRoute}>
            </Header>
            
            <Footer />
    
      </div>
      
    );
  }
  
    
      export default LandingPage;
      