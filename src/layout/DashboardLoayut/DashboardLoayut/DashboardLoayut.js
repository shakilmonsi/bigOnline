import React from 'react';
import AdminHeaderTwo from '../../../Pages/Dashboard/MyDashboard/AdminHeaderTwo/AdminHeaderTwo';
import AdminHeader from '../../../Pages/Dashboard/MyDashboard/AdminHeader/AdminHeader';
import MyDashboard from '../../../Pages/Dashboard/MyDashboard/MyDashboard';

const DashboardLoayut=()=> {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <AdminHeaderTwo></AdminHeaderTwo>
            <MyDashboard></MyDashboard>
        </div>
    );
}

export default DashboardLoayut;