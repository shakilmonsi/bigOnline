import React from 'react';
import  bannerfive from "../../../assets/CatagoryFiveAllLogo/image 157.png"

import CatagoryBanner from '../../ProdcutCatagoryFivepage/Catagorys/CatagoryBanner/CatagoryBanner';
import BusinessSellerNavber from '../../BusinessSellerpage/BusnessSellerPage/BusinessSellerNavber/BusinessSellerNavber';
import Servicses from '../../Home/Home/services/Servicses';

const ViewAllBusnesspage=()=> {
    return (
        <div>
            <div className=' d-flex justify-content-center'>
     <img src={bannerfive}></img>
     </div>
              <BusinessSellerNavber></BusinessSellerNavber>
              <Servicses></Servicses>
            
        </div>
    );
}

export default ViewAllBusnesspage;