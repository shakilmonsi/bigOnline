import React from 'react';
import './DashboardLoayut.css'
import AdminHeaderTwo from '../../../Pages/Dashboard/MyDashboard/AdminHeaderTwo/AdminHeaderTwo';
import AdminHeader from '../../../Pages/Dashboard/MyDashboard/AdminHeader/AdminHeader';
import MyDashboard from '../../../Pages/Dashboard/MyDashboard/MyDashboard';
import RecentOrders from '../../../Pages/Dashboard/MyDashboard/RecentOrders/RecentOrders';
import SellerFooter from '../../../Pages/BusinessSellerpage/BusnessSellerPage/BusnessSellerFooter/SellerFooter';
import Servicses from '../../../Pages/Home/Home/services/Servicses';
import ExptorOurtopHomePromotor from '../../../Pages/Home/Home/exploreOutopHomePromotor/ExptorOurtopHomePromotor';
import Catagrytrowelproducts from '../../../Pages/Home/Home/shercomponent/catagrytrowelproducts/Catagrytrowelproducts';
import ExploreOurTopHomBusiness from '../../../Pages/Home/Home/ExploreOurTopHomeBusinessTrue/ExploreOurTopHomBusiness';

const DashboardLoayut=()=> {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <AdminHeaderTwo></AdminHeaderTwo>
            <div className='style_recentOrder_my_dash py-4'>
            <MyDashboard></MyDashboard>
            <RecentOrders></RecentOrders>
           
            </div>
            <div style={{paddingLeft:"100px",paddingRight:"100px"}}>
            <ExptorOurtopHomePromotor></ExptorOurtopHomePromotor>
            <Catagrytrowelproducts></Catagrytrowelproducts>

            <ExploreOurTopHomBusiness></ExploreOurTopHomBusiness>

            </div>
         
         <div className='mt-4'>
         <SellerFooter></SellerFooter>
              <Servicses></Servicses>
         </div>
            
        </div>
    );
}

export default DashboardLoayut;