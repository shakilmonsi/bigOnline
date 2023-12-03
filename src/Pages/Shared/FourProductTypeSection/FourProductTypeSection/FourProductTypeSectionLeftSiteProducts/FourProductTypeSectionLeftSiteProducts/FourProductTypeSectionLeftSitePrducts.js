import React from 'react';
import "./FourProductTypeSectionLeftSiteProducts.css"



import imgone from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s1.png";
import imgtwo from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s2.png";
import imgtr from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s3.png";
import img4 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s4.png";
import img5 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s5.png";
import img6 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/shos6.png";
import img7 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s7.png";
import img8 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/8.png";
import img9 from "../../../../../../assets/FourProductTypeSectionLeftSitePrductsCard/s9.png";
// import barwith2 from "../../../../../../assets/FollowedProduct/barwith2.png";
// import redShos3 from "../../../../../../assets/FollowedProduct/redShos3.png";
// import bag4 from "../../../../../../assets/FollowedProduct/bag4.png";
// import phone5 from "../../../../../../assets/FollowedProduct/phone5.png";
// import watch6 from "../../../../../../assets/FollowedProduct/watch6.png";

// oprer  data golo product  img 




import reding from "../../../../../../assets/ElectricCategorypageAllCompomentLogo/reding.svg";
import widthreding from "../../../../../../assets/ElectricCategorypageAllCompomentLogo/starwidth.svg";


import hardicon from "../../../../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../../../../assets/grayverifyde/verified.svg"
import thredot from "../../../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../../../assets/verifydeicon/image 110.png"
import { Link } from 'react-router-dom';
import FourProductTypeSectionLeftSitePrductsCard from '../FourProductTypeSectionLeftSitePrductsCard/FourProductTypeSectionLeftSitePrductsCard';

const FourProductTypeSectionLeftSitePrducts = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids',
            img: imgone,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            grayverifyde:grayverifyde,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,

        },
     
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:imgtwo,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description:'School Bags For Girls Big Capacity Backpack Shouler Bags Anti Theft Waterproof Daily Travel Back Pack Ladies Bagpack School Bag',
           
         


        },
        {

            id: 3,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:imgtr,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Kids handbags For Girls cartoon bag styling Mini shoulder Messenger bag cartoon cute girls cat bag fashion shoulder diagonal.',
          
        },

        {

            id: 4,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:img4,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids.',
         
        },

        {

            id: 5,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:img5,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Cute Backpack Little Penguin Coin Purse Soft Mini Cartoon Coin Purse Data Line Bag Simplicity Durable Plush Coin Purse Accessories.',
     
        },
        {

            id: 6,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
     
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids.', 
            img: img6
        },
        {

            id: 7,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
     
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids.', 
            img: img7
        },
        {

            id: 8,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
     
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids.', 
            img: img8
        },
        {

            id: 9,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            verifide:verifide,
     
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Nylon Animal Children Backpacks Kids Preschool Bags Cartoon Panda Book Bags for Baby Girl Boy Anti Lost Backpack for Kids.', 
            img: img9
        },
   
 
     
    ]
    return (
        <section className=' ' style={{ backgroundColor: "#FFFFFF" ,marginTop:"47px",padding:"40px"}}>
      

                        <div className='row' style={{paddingRight:"25px",paddingLeft:"25px"}}>

<div className='grid_FourProductTypeSectionLeftSite_item ms-4'>
 


            {
                servicesData.map(service => <FourProductTypeSectionLeftSitePrductsCard
                    key={service.id}
                    service={service}
                ></FourProductTypeSectionLeftSitePrductsCard>)
            }

</div>
         </div>

        </section>
    );
}








export default FourProductTypeSectionLeftSitePrducts;