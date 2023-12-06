import React from 'react';
import MyOrdersLeftSite from '../MyOrdersLeftSite/MyOrdersLeftSite';
import MyOrderRightSite from '../MyOrderRightSite/MyOrderRightSite';

const MyOrders=()=> {
    return (
        <div className='row'>
            <div className='col-lg-4'>
            <MyOrdersLeftSite></MyOrdersLeftSite>
            </div>
      
            <div className='col-lg-8'>
            <MyOrderRightSite></MyOrderRightSite>
            </div>
      
      
        </div>
    );
}

export default MyOrders;