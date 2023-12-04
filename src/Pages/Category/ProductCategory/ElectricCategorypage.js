import React from 'react';
import RightSitesection from './RightSit/RightSitesection';
import LeftSite from './LeftSite/LeftSite';
import DelProduct from './categoryProducts/DelProduct';

const ElectricCategorypage=()=> {
    return (
        <div>


{/* <div > */}
       


       <DelProduct></DelProduct>
       

<div className='row d-flex gap-4' style={{marginTop:"47px", overflow:"hidden"}} >
    <div className='col-lg-3   productTypeSEction_all_body_setup'style={{padding:60,overflow:"hidden"}}>
<RightSitesection></RightSitesection>
        
    </div>
    <div className='col-lg-8' style={ {backgroundColor:"#FFFFFF",borderRadius:"5px"}}>
       <LeftSite></LeftSite>        
    </div>

</div>
            
            
        {/* </div>
    );
};
 */}


            
        </div>
    );
}

export default ElectricCategorypage;