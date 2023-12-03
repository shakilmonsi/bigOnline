import React from 'react';
import "./Catagory.css"
import  bannerfive from "../../../../assets/CatagoryFiveAllLogo/image 157.png"
import CatagoryNaver from '../CatagoryNavber/CatagoryNaver';
const CatagoryBanner = () => {
    return (
 <div >
           
     <div className=' d-flex justify-content-center'>
     <img src={bannerfive}></img>
     </div>
        
        <div className=' d-flex justify-content-center '>
           <CatagoryNaver></CatagoryNaver>
        </div>

 </div>
    );
};

export default CatagoryBanner;
