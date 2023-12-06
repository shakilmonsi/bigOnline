import React from 'react';
import "./DelProduct.css"
import shos1 from "../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/shos1.png";
import watch2 from "../../../../assets/TrendingDealsinElectronics/watch2.png";
import bag3 from "../../../../assets/TrendingDealsinElectronics/bag3.png";
import mobile from "../../../../assets/TrendingDealsinElectronics/mobile-4.png";
import watch from "../../../../assets/TrendingDealsinElectronics/watch-5.png";
import shos6 from "../../../../assets/TrendingDealsinElectronics/shos6.png";

import arrowdown from "../../../../assets/catagoryPagethre/logo/arrow down fill (2).svg";
import arrowup  from "../../../../assets/catagoryPagethre/logo/arrow up fill.svg";

import DelproductCard from '../DelproductCard/DelproductCard';


const DelProduct = () => {
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: shos1,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch2,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: bag3,
                        price: 8750.00,
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: mobile,
                        parseIntrice: 8750.00,
                        delprice: 3910.500,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch,
                        price: 8750.00,
                        delprice: 9310.00,


                },

                {
                        id: 6,
                        name: 'Teeth Whitening',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: shos6,
                        price: 8750.00,
                        delprice: 9310.00,


                },
        ]
        return (
               
                        <div className=' trending_dealsin_electronices' style={{ backgroundColor: "#F5F7FB" }}>
                              <div  style={{paddingLeft:"60px", paddingRight:"28px"}}>
                              <div className='d-flex justify-content-between'>
                                     
                                     <div>
                                     <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Electric Category</h4>

                                     </div>
                                     
                                        <div style={{paddingRight:"44px"}}>
                                        <img className='arrowup_arroedun_style' src={arrowdown} alt=''></img>

                                                <img className='arrowup_arroedun_style' src={arrowup} alt=''></img>
                                        </div>

                                </div>


                               <div className=' mt-4'>
                                <div  className='gap-3 
                                  TrendingDealsInElectronic_product_grid_setup'>
                                {
                                        servicesData.map(electricCategoryProductsRightSiData => <DelproductCard
                                                key={electricCategoryProductsRightSiData.id}
                                                electricCategoryProductsRightSiData={electricCategoryProductsRightSiData}
                                        ></DelproductCard>)
                                }


                                </div>
                               </div>

                              </div>

                                
                        </div>


             
        );
}

export default DelProduct;