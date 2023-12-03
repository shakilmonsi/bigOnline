import React from 'react';
import "./BusnessSEllerPage.css"
import  bannerfive from "../../../assets/CatagoryFiveAllLogo/image 157.png"
import BusinessSellerNavber from './BusinessSellerNavber/BusinessSellerNavber';
import SellerFooter from './BusnessSellerFooter/SellerFooter';
import Servicses from '../../Home/Home/services/Servicses';
import ExptorOurtopHomePromotor from '../../Home/Home/exploreOutopHomePromotor/ExptorOurtopHomePromotor';
const BusnessSellerPage=()=> {
    return (

<div>
<div className=' d-flex justify-content-center'>
     <img src={bannerfive}></img>
     </div>
     <BusinessSellerNavber></BusinessSellerNavber>

     <ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>
     <SellerFooter></SellerFooter>
     <Servicses></Servicses>
            
</div>




           
   

    );
}

export default BusnessSellerPage;