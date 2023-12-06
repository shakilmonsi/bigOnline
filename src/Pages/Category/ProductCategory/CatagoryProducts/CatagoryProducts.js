
import React from 'react';
import "./CatagoryProducts.css"


// new link 
import number1 from "../../../../assets/catagoryPagethre/number1.png";
import shatbox from "../../../../assets/catagoryPagethre/shatbox.png";
import shone3 from "../../../../assets/catagoryPagethre/shone3.png";
import it4 from "../../../../assets/catagoryPagethre/it4.png";
import shos from "../../../../assets/catagoryPagethre/shos-5.png";
import sand6 from "../../../../assets/catagoryPagethre/sand6.png";
import under7 from "../../../../assets/catagoryPagethre/under7.png";
import siment8 from "../../../../assets/catagoryPagethre/siment8.png";
import shoptag9 from "../../../../assets/catagoryPagethre/shoptag9.png";
import drak14 from "../../../../assets/catagoryPagethre/drak14.png";
import shos11 from "../../../../assets/catagoryPagethre/shos11.png";
import jecet12 from "../../../../assets/catagoryPagethre/jecet12.png";
import hsos13 from "../../../../assets/catagoryPagethre/hsos13.png";
import bage14 from "../../../../assets/catagoryPagethre/bage14.png";
import shos15 from "../../../../assets/catagoryPagethre/shos15.png";
import number16 from "../../../../assets/catagoryPagethre/number16.png";


// oprer  data golo product  img 
import reding from "../../../../assets/iconreting/rating.svg";
import widthreding from "../../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../../assets/grayverifyde/verified.svg"
import thredot from "../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../assets/verifydeicon/image 110.png"

import ProductCard from '../ProductCard/ProductCard';

const CatagoryProducts = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: number1,
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
            img:shatbox,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
          
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
         


        },
        {

            id: 3,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
           
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            img: shone3,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
          
        },

        {

            id: 4,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:it4,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
         
        },

        {

            id: 5,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:shos,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
     
        },

        // 66666
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: sand6
        },
   
        // 7
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: under7
        },
   
        // 8
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: siment8
        },
   
        // 9
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: shoptag9
        },
   
        // 10
        {

            id: 10,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: drak14
        },
   
        // 11
        {

            id: 11,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: shos11
        },
        // 12
        {

            id: 12,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: jecet12
        },
        // 13
        {

            id: 13,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: hsos13
        },
        // 14
        {

            id: 14,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: bage14
        },
        // 15
        {

            id: 15,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: shos15
        },
        // 16
        {

            id: 16,
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
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: number16
        },
   
 
     
    ]
    return (
        <section className=' ' style={{ backgroundColor: "#FFFFFF" ,marginTop:"47px"}}>

                        <div className='row'>

<div className='grid_right_site_item_and_section'>
 


            {
                servicesData?.map(rgihtsiteproductdata => <ProductCard
                    key={rgihtsiteproductdata.id}
                    rgihtsiteproductdata={rgihtsiteproductdata}
                ></ProductCard>)
            }

</div>
         </div>

        </section>
    );
}








export default CatagoryProducts;