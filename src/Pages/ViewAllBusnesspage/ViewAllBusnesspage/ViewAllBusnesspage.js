import React from 'react';
import  bannerfive from "../../../assets/CatagoryFiveAllLogo/image 157.png"

import CatagoryBanner from '../../ProdcutCatagoryFivepage/Catagorys/CatagoryBanner/CatagoryBanner';
import BusinessSellerNavber from '../../BusinessSellerpage/BusnessSellerPage/BusinessSellerNavber/BusinessSellerNavber';
import Servicses from '../../Home/Home/services/Servicses';
import SellerFooter from '../../BusinessSellerpage/BusnessSellerPage/BusnessSellerFooter/SellerFooter';
import ExptorOurtopHomePromotor from '../../Home/Home/exploreOutopHomePromotor/ExptorOurtopHomePromotor';
import ExploreOurTopHomBusiness from '../../Home/Home/ExploreOurTopHomeBusinessTrue/ExploreOurTopHomBusiness';
import Catagrytrowelproducts from '../../Home/Home/shercomponent/catagrytrowelproducts/Catagrytrowelproducts';
import ViewSellerAll from './viewTopBisnessSellerAll/ViewSellerAll';

const ViewAllBusnesspage=()=> {
    return (
        <div>
            <div className=' d-flex justify-content-center'>
     <img src={bannerfive}></img>
     </div>
              <BusinessSellerNavber></BusinessSellerNavber>

            <div style={{paddingLeft:"103px",paddingRight:"101px"}}>
            <ViewSellerAll></ViewSellerAll>
            <div >
            <ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>
            </div>
          
              <Catagrytrowelproducts></Catagrytrowelproducts>
              <ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>
            </div>

              <div style={{marginTop:"15px"}}>
              <SellerFooter></SellerFooter>
              </div>
              <Servicses></Servicses>
            
        </div>
    );
}

export default ViewAllBusnesspage;