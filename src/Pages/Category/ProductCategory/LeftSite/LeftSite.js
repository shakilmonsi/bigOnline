import React from 'react';

import "./LeftSite.css"
import arrowbutton from "../../../../assets/ElectricCategorypageAllCompomentLogo/productypeRightSiteLogo/leftarrow (1).svg"
import rightarrowlogo from "../../../../assets/ElectricCategorypageAllCompomentLogo/productypeRightSiteLogo/right.svg"
import list  from"../../../../assets/ElectricCategorypageAllCompomentLogo/productypeRightSiteLogo/list.svg"
 import black from "../../../../assets/ElectricCategorypageAllCompomentLogo/bleck.svg"


import { Dropdown } from 'react-bootstrap';
import CatagoryProducts from '../CatagoryProducts/CatagoryProducts';
// import RightSiteProductsDispaly from './RightSiteProductDispalyall/RightSiteProductsDispaly';
const LeftSite = () => {
    return (
        <section className='legsite_body_setup'>
            <div>
                 {/* main dib up  */}
                 <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop:"36.5px"}}>
  <div className="container-fluid">
    <div>
        <h6>Total  “2,14,4825”  results found</h6>
    </div>

   
    <div className="" id="">

      <form className="d-flex gap-2" >





                 
<span className=''>Sort by</span>
 
      <div className="d-flex accontu_toggel_in_logo_style_product_Type" style={{ width:"auto",height:"35px"}}>
           
 
              {/* <Link to="account">account</Link> */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                Recommended
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/googol">my account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>

        
        <h6 className='grid_text_style_setup 'style={{marginTop:"12px"}}>GRID</h6>
        <div className='list_section_setup' style={{width:"36px",height:"36px"}}>
            <img style={{width:"20px", height:"20px"}}  src={list} alt=''></img>
        </div>
      </form>
    </div>
  </div>
</nav>

{/* Categories  and pat to pat section 2 */}


<div className='row'>
    <div className='decond_header_dropdown_section_setup gap-2' style={{marginTop:"24px"}}>
   
       {/* 111  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Categories  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 111 */}
       {/* 2  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Product Status  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 2 */}
   
       {/* 3  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Brands  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 3 */}
   
       {/* 4  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Price Range  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 4 */}
   
       {/* 5  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Rating  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 5 */}
   
       {/* 6  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Delivery type  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 6 */}
   
       {/* 7  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
           {/* <Link to="account">account</Link> */}
           <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic">
             <span className='button_text_style_setup'>Product type  </span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="/googol">my account</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>

         </div>
         {/* 7 */}
   
       {/* 8  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
 
          <button style={{border:"none"}}>Electronics</button>

         </div>
         {/* 8 */}
   
       {/* 9  */}
       <div className="body_and_dropdown_pat " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
       <div className='gap-2 d-flex'>
<img className='' style={{color:"#2A2A2A"}} src={black} alt=''></img>
    <span className='in_stock_style'>  Black </span>
    
    
</div>
       
         </div>
         {/* 9 */}
   
       {/* 10  */}
       <div className="body_and_dropdown_pat_left_arrow " style={{ width:"auto",height:"35px",textDecoration:"none"}}>
           
       <img className='' style={{color:"#2A2A2ACC",width:"14px",height:"14px"}} src={rightarrowlogo} alt=''></img>

         </div>
         {/* 10 */}

    </div>



</div>



<div>
<CatagoryProducts></CatagoryProducts>

</div>



{/* main div dowon  */}
            </div>       
        </section>
    );
};




export default LeftSite;