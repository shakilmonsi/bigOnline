import React from 'react';
import RightSitesection from './RightSit/RightSitesection';
import LeftSite from './LeftSite/LeftSite';
import DelProduct from './categoryProducts/DelProduct';
import CarouselProduct from './carouselproduct/CarouselProduct';

const ElectricCategorypage=()=> {
    return (
        <div>


{/* <div > */}
       
<CarouselProduct></CarouselProduct>


<DelProduct></DelProduct>

    

<section style={{paddingLeft:"90px", paddingRight:"49px",marginTop:"36px"}}>
<div className='row d-flex ' style={{marginTop:"47px", gap:110}} >
    <div className='col-lg-3   productTypeSEction_all_body_setup'>
<RightSitesection></RightSitesection>
        
    </div>
    <div className='col-lg-8' style={ {backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
       <LeftSite></LeftSite>        
    </div>

</div>
</section>
            
            
        {/* </div>
    );
};
 */}


            
        </div>
    );
}

export default ElectricCategorypage;