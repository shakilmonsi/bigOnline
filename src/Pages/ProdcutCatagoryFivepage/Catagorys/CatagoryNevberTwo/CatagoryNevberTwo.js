import React from 'react';
import "./CatagoryNevberTwo.css"
import search from "../../../../assets/headerimg/downheaderImg/search.svg"
import { Link } from 'react-router-dom';
const CatagoryNevberTwo=()=> {
    return (
        <div className='nevber_two_style mt-4  justify-content-center'style={{margin:"auto"}}>


            <nav className="navbar navbar-expand-lg  ">




<div className='d-flex'style={{gap:800}}>

<div className='d-flex  mt-3 align-items-center'  style={{gap:13,textDecoration:"none"}}>
   
    
        <Link className='taxt_link_style'>Homepage</Link>

        <Link className='taxt_link_style d-flex gap-2'>All Products <span className='link_span'>6512</span></Link>

        <Link className='taxt_link_style' >Categories</Link>

        <Link className='taxt_link_style'>Deals & Offers</Link>

        <Link className='taxt_link_style d-flex gap-2'>Reviews  <span className='link_span'>12</span></Link>

        <Link className='taxt_link_style'>About us</Link>

</div>



<div>
<form className="d-flex " role="search" >

<input
  className="form-control position-relative text-center custom-search-input   input_shkarch_style
"
 
  type="search"
  placeholder="Search shop items here......"
  aria-label="Search"
/>

<img className="position-absolute "
  src={search}
  style={{ marginLeft: 185, marginTop: 10, width: "20px", height: "20px" }}
  alt="Search Icon"
/>

</form>

</div>





</div>













</nav>

    </div>
    );
}

export default CatagoryNevberTwo;