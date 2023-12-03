

import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDitils from "../../ProdcutDitils/ProductDitils/ProductsDitilpage/ProducditilsPattopat/ProductDitils";
// import ElectricCategorypageAllCompomentandpattopat from "../../Pages/Home/Home/ElectricCategorypages/ElectricCategorypageAllCompoment/ElectricCategorypageAllCompomentandpattopat";
import FourProductTypeSectionAllComponent from "../../Pages/Shared/FourProductTypeSection/FourProductTypeSectionAllComponent";
import ElectricCategorypage from "../../Pages/Category/ProductCategory/ElectricCategorypage";
import Catagoryfivepage from "../../Pages/ProdcutCatagoryFivepage/Catagorys/CatagoryFiveallPage/Catagoryfivepage";

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
            {
                path: '/fourProductTypeSection',
                element:<FourProductTypeSectionAllComponent></FourProductTypeSectionAllComponent>
            },
            {
                path: '/productsCatagoryFiveAllcomponent',
                element:<Catagoryfivepage></Catagoryfivepage>
            },
            {
                path: '/test',
                element:<ElectricCategorypage></ElectricCategorypage>
            },



        ]
    }
])