import React from 'react';
import "./BusnessSEllerPage.css"
import  bannerfive from "../../../assets/CatagoryFiveAllLogo/image 157.png"
import BusinessSellerNavber from './BusinessSellerNavber/BusinessSellerNavber';
import SellerFooter from './BusnessSellerFooter/SellerFooter';
import Servicses from '../../Home/Home/services/Servicses';
import ExptorOurtopHomePromotor from '../../Home/Home/exploreOutopHomePromotor/ExptorOurtopHomePromotor';
import Catagrytrowelproducts from '../../Home/Home/shercomponent/catagrytrowelproducts/Catagrytrowelproducts';
import YouMightalsobeinterestedin from './YouMightalsobeinterestedin/YouMightalsobeinterestedin';
import AllSeller from './allSeller/AllSeller';
const BusnessSellerPage=()=> {
    return (

<div>
<div className=' d-flex justify-content-center'>
     <img src={bannerfive}></img>
     </div>
     <BusinessSellerNavber></BusinessSellerNavber>

     <div style={{paddingLeft:"101px",paddingRight:"101px"}}>
     <AllSeller></AllSeller>


<YouMightalsobeinterestedin></YouMightalsobeinterestedin>
<Catagrytrowelproducts></Catagrytrowelproducts>

<ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>
     </div>
   <div style={{marginTop:"15px"}}>
   <SellerFooter></SellerFooter>
   </div>
    
     <Servicses></Servicses>
            
</div>




           
   

    );
}

export default BusnessSellerPage;