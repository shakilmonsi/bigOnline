import React from "react";
import bannersix from "../../../assets/viewAllBisnessTwoPageimg/image 157.png";
import "./ViewAllPageTwo.css";
import BusinessSellerNavber from "../../BusinessSellerpage/BusnessSellerPage/BusinessSellerNavber/BusinessSellerNavber";
import AllSeller from "../../BusinessSellerpage/BusnessSellerPage/allSeller/AllSeller";
import YouMightalsobeinterestedin from "../../BusinessSellerpage/BusnessSellerPage/YouMightalsobeinterestedin/YouMightalsobeinterestedin";
import Catagrytrowelproducts from "../../Home/Home/shercomponent/catagrytrowelproducts/Catagrytrowelproducts";
import ExptorOurtopHomePromotor from "../../Home/Home/exploreOutopHomePromotor/ExptorOurtopHomePromotor";
import SellerFooter from "../../BusinessSellerpage/BusnessSellerPage/BusnessSellerFooter/SellerFooter";
import Servicses from "../../Home/Home/services/Servicses";
import ViewSellerAll from "../../ViewAllBusnesspage/ViewAllBusnesspage/viewTopBisnessSellerAll/ViewSellerAll";
import ExploreOurTopHomBusiness from "../../Home/Home/ExploreOurTopHomeBusinessTrue/ExploreOurTopHomBusiness";
const ViewAllPageTwo = () => {
  return (
    <div>

      <div className=" d-flex justify-content-center">
        <img src={bannersix}></img>
      </div>
      <BusinessSellerNavber></BusinessSellerNavber>


      <section style={{ paddingLeft: "103px", paddingRight: "100px" }}>
        <ViewSellerAll></ViewSellerAll>
        <ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>

       
        <Catagrytrowelproducts></Catagrytrowelproducts>
<ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>
      </section>


      <div style={{ marginTop: "15px" }}>
        <SellerFooter></SellerFooter>
      </div>
      <Servicses></Servicses>
    </div>
    
  );
};

export default ViewAllPageTwo;
