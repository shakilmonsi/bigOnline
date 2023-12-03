import React from 'react';
import "./BusinessSellerNavber.css"
import  arrowlogo from "../../../../assets/busnessSelersixpage/left arrow.svg"
import  search from "../../../../assets/headerimg/downheaderImg/search.svg"
const BusinessSellerNavber=()=> {
    return (
<nav className='' >
    <div className='d-flex justify-content-between py-4 .align-items-center
' style={{paddingLeft:"150px",paddingRight:"150px"}}>

<div>
    <h5>Explore Our Top Home Business</h5>
</div>

<div className='d-flex' style={{gap:"80px"}}>
<div className='d-flex gap-3'>
<div className='sele_nav_name_style'>
<span className='navber_title_style'>Rating</span>
<img src={arrowlogo} alt=''></img>
</div>
<div className='sele_nav_name_style'>
<span  className='navber_title_style'> Follower Count</span>
<img src={arrowlogo} alt=''></img>
</div>
<div className='sele_nav_name_style'>
<span  className='navber_title_style'>Verified Status</span>
<img src={arrowlogo} alt=''></img>
</div>
<div className='sele_nav_name_style'>
<span  className='navber_title_style'>Follow Status</span>
<img src={arrowlogo} alt=''></img>
</div>



</div>

<div className='d-flex'>
<form className="d-flex  " role="search" >

<input
  className="form-control sele_input_style position-relative text-center custom-search-input 
"
  style={{  marginLeft: -20 }}
  type="search"
  placeholder="Search ."
  aria-label="Search"
/>

<img className="position-absolute "
  src={search}
  style={{ marginLeft: 50, marginTop: 14, width: "204px", height: "20px" }}
  alt="Search Icon"
/>

</form>


<div className='d-flex gap-2'>
    <span  className='navber_title_style mt-3'>Sort by</span>
<div className='sele_nav_name_style'>
    
    <span  className='navber_title_style'>Recommended</span>
    <img src={arrowlogo} alt=''></img>
    </div>
    
</div>

</div>
</div>




    </div>

</nav>
    );
}

export default BusinessSellerNavber;