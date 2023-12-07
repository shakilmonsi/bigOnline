import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Sitebar from './siteber/Sitebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
        
            <Sitebar></Sitebar>
      
      
                        <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;