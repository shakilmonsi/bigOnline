import React from 'react';
import MyOrdersLeftSite from '../MyOrdersLeftSite/MyOrdersLeftSite';
import MyOrderRightSite from '../MyOrderRightSite/MyOrderRightSite';

const MyOrders=()=> {
    return (
   <section style={{paddingLeft:"188px",paddingRight:"188px",marginTop:"20px"}}>
    <h3 className='text-center'> My Orders</h3>
         <div className='row' >
            
            <div className='col-lg-4' style={{marginTop:"40px"}}>
            <MyOrdersLeftSite></MyOrdersLeftSite>
            </div>
      
            <div className='col-lg-8' style={{marginTop:"40px"}}>
            <MyOrderRightSite></MyOrderRightSite>
            </div>
            
      
      
        </div>
   </section>
    );
}

export default MyOrders;