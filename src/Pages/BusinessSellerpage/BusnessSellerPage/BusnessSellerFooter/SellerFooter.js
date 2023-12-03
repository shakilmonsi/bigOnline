import React from 'react';
import "./SellerFooter.css"
import Layer  from "../../../../assets/busnessSelersixpage/footerlogo/Layer_1.svg"
import Rectangle  from "../../../../assets/busnessSelersixpage/footerlogo/Rectangle 5857.png"
import apple  from "../../../../assets/busnessSelersixpage/footerlogo/apple.svg"
import plays  from "../../../../assets/busnessSelersixpage/footerlogo/plays.svg"
const SellerFooter=()=>{
    return (
        <div className='seller_footer_style'>

            <div className=' grit_style align-items-center mt-2' style={{paddingLeft:"50px",paddingRight:"50px"}}>

                <div>
                    <h5 className='footer_title-style'>Get the best experience by downloading our mobileapp </h5>

                </div>
                <div style={{marginLeft:24}}>
                    <img className='scren_style'   style={{color:"#FFFFFF"}} src={Rectangle} alt=''></img>
              
              <p className='svan_code_style'>Scan QR Code</p>

                </div>
                <div className='d-flex gap-2' style={{marginLeft:-155}}>
                <span className='download_text_style'> Download The <span className='free_text'>FREE </span></span>
                    <img className='layer_logo_style' src={Layer} alt=''></img>
              
              <span className='download_text_style'> App  &  Shop On The GO</span>

                </div>



                <div className='d-flex gap-4'>
           
     <img className='apple_playstore_logo_seller' src={apple} alt='' style={{apple}}></img>
            
                <img className='apple_playstore_logo_seller' src={plays} alt='' style={{}}></img>

                </div>

                
            </div>
            
        </div>
    );
}

export default SellerFooter;