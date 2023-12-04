import React from 'react';
import AdminHeaderTwo from '../../../Pages/Dashboard/MyDashboard/AdminHeaderTwo/AdminHeaderTwo';
import AdminHeader from '../../../Pages/Dashboard/MyDashboard/AdminHeader/AdminHeader';
import MyDashboard from '../../../Pages/Dashboard/MyDashboard/MyDashboard';
import RecentOrders from '../../../Pages/Dashboard/MyDashboard/RecentOrders/RecentOrders';

const DashboardLoayut=()=> {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <AdminHeaderTwo></AdminHeaderTwo>
            <MyDashboard></MyDashboard>
            <RecentOrders></RecentOrders>
        </div>
    );
}

export default DashboardLoayut;