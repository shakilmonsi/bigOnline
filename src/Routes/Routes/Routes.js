
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDitils from "../../ProdcutDitils/ProductDitils/ProductsDitilpage/ProducditilsPattopat/ProductDitils";
import FourProductTypeSectionAllComponent from "../../Pages/Shared/FourProductTypeSection/FourProductTypeSectionAllComponent";
import Catagoryfivepage from "../../Pages/ProdcutCatagoryFivepage/Catagorys/CatagoryFiveallPage/Catagoryfivepage";
import BusnessSellerPage from "../../Pages/BusinessSellerpage/BusnessSellerPage/BusnessSellerPage";
import ViewAllBusnesspage from "../../Pages/ViewAllBusnesspage/ViewAllBusnesspage/ViewAllBusnesspage";
import ViewAllPageTwo from "../../Pages/ViewAllPageTwo/ViewAllPageTwo/ViewAllPageTwo";
import DashboardLoayut from "../../layout/DashboardLoayut/DashboardLoayut/DashboardLoayut";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders/MyOrders";
import ElectricCategorypage from "../../Pages/Category/ProductCategory/ElectricCategorypage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
           
         
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/productditils',
                element:<ProductDitils></ProductDitils>
            },
            // {
            //     path: '/electricCategorypage',
            //     element:<ElectricCategorypageAllCompoment></ElectricCategorypageAllCompoment>
            // },

            // {
            //     path: '/electricCategorypage',
            //     element:<ElectricCategorypageAllCompomentandpattopat></ElectricCategorypageAllCompomentandpattopat>
            // },
//page 3
         
            {
                path: '/electricCategorypage',
                element:<ElectricCategorypage></ElectricCategorypage>
            },
//page 4
         
            {
                path: '/fourProductTypeSection',
                element:<FourProductTypeSectionAllComponent></FourProductTypeSectionAllComponent>
            },
            //page 5
            {
                path: '/productsCatagoryFiveAllcomponent',
                element:<Catagoryfivepage></Catagoryfivepage>
            },
            //page 6
            {
                path: '/busnessSellerPage',
                element:<BusnessSellerPage></BusnessSellerPage>
            },
            // page 7
            {
                path: '/viewAllBusnesspage',
                element:<ViewAllBusnesspage></ViewAllBusnesspage>
            },
            //page 8
            {
                path: '/viewAllPageTwo',
                element:<ViewAllPageTwo></ViewAllPageTwo>
            },
            // dashboard  seting
            // page 9
            {
                path: '/myDashboard',
                element:<DashboardLoayut></DashboardLoayut>
            },
            //page 10
            {
                path: '/myOrders',
                element:<MyOrders></MyOrders>
            },


        ]
    }
])

