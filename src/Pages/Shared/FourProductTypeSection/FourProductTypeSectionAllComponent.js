import React from 'react';
import "./FourProductTypeSectionAllComponent.css"
import FourProductTypeSectionRightSite from './FourProductTypeSection/FourProductTypeSectionRightSite';
import FourProductTypeSectionLeftSite from './FourProductTypeSection/FourProductTypeSectionLeftSite/FourProductTypeSectionLeftSite';
const FourProductTypeSectionAllComponent = () => {
    return (
        <div style={{paddingLeft:"88px",paddingRight:"80px",marginTop:"25px"}}>
      
            <div className='row gap-4' style={{marginTop:"47px" }}>
    <div className='col-lg-3   productTypeSEction_all_body_setup'>
<FourProductTypeSectionRightSite></FourProductTypeSectionRightSite>
        
    </div>
    <div className='col-lg-8 ' style={ {backgroundColor:"#FFFFFF",borderRadius:"5px",marginLeft:90}}>
        <FourProductTypeSectionLeftSite></FourProductTypeSectionLeftSite>        
    </div>

</div>
       
       
       
       
       
       
        </div>
    );
};

export default FourProductTypeSectionAllComponent;