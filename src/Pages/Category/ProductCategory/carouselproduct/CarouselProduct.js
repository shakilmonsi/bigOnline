import React from 'react';

import "./CarouselProduct.css"

// logo import
import  leftarrow from "../../../../assets/catagoryPagethre/carosolimg/bleckarrow.svg";
import right from "../../../../assets/catagoryPagethre/carosolimg/right.svg";
// logo import 




import books from "../../../../assets/catagoryPagethre/carosolimg/watch1.png"
import fitness from "../../../../assets/catagoryPagethre/carosolimg/leptop2.png"
import gamingitems from "../../../../assets/catagoryPagethre/carosolimg/homephone3.png"
import healthcare from "../../../../assets/catagoryPagethre/carosolimg/dol4.png"
import laptoptablet from "../../../../assets/catagoryPagethre/carosolimg/lepto5.png"
import slider from "../../../../assets/catagoryPagethre/carosolimg/red6.png"
import slider1 from "../../../../assets/catagoryPagethre/carosolimg/book8.png"
import smafrtHome from "../../../../assets/catagoryPagethre/carosolimg/gam9.png"
import sports from "../../../../assets/catagoryPagethre/carosolimg/bandelshop10.png"
import watch from "../../../../assets/catagoryPagethre/carosolimg/book8.png"
import toys from "../../../../assets/catagoryPagethre/carosolimg/almari11.png"
import smarewatch from "../../../../assets/catagoryPagethre/carosolimg/penHolder12.png"

const CarouselProduct = () => {

        const catagrytrowelproducts = [
                // {
                //         id: 1,
                //         name: "",
                //         catagryimg: leftarrow

                // },
                {
                        id: 1,
                        name: "Books",
                        catagryimg: books

                },
                {
                        id: 2,
                        name: "Fitness",
                        catagryimg: fitness

                },
                {
                        id: 3,
                        name: "GamingItems",
                        catagryimg: gamingitems

                },
                {
                        id: 4,
                        name: "HealTcare",
                        catagryimg: healthcare

                },
                {
                        id: 5,
                        name: "Lapto Tablet",
                        catagryimg: laptoptablet

                },
                {
                        id: 6,
                        name: "slider",
                        catagryimg: slider

                },
                {
                        id: 7,
                        name: "Slider",
                        catagryimg: slider1

                },
                {
                        id: 8,
                        name: "Smafrt Home",
                        catagryimg: smafrtHome

                },
                {
                        id: 9,
                        name: "Sports",
                        catagryimg: sports

                },
                {
                        id: 10,
                        name: "Watch",
                        catagryimg: watch

                },
                {
                        id: 11,
                        name: "Toyp",
                        catagryimg: toys

                },
                {
                        id: 12,
                        name: "Smaret  watch",
                        catagryimg: smarewatch

                },
                // {
                //         id: 12,
                //         name: "",
                //         catagryimg: right

                // },


        ]




        return (
                <section className='CarouselProduct_full_display' style={{ backgroundColor: "#FFFFFF" ,marginTop:"47px",overflow:'hidden'}}>
                      <div className='d-flex align-items-center gap-3'>

<div className='left_arrow_logo'>
    <img src={leftarrow} alt=''></img>
</div>

                      <div className='   mt-4 CarouselProduct_product'>

{
        catagrytrowelproducts?.map(catagrytrowelproduct => <div className='' key={catagrytrowelproduct.id}>
                <div className='' style={{ backgroundColor: "#F4F4F4", borderRadius: "100%", width: "80px", height: "80px", flexShrink: 0 }}>

                        <img className='' style={{ margin: "12px", height: "auto", width: "auto" }} src={catagrytrowelproduct.catagryimg} ></img>

                </div>

                <h6 className='mt-3 mx-auto' style={{ color: "#000000", fontSize: "16px", fontFamily: "inter", fontStyle: "normal", lineHeight: "normal", fontWeight: 500 }}>{catagrytrowelproduct.name}</h6>

        </div>)
}
</div>


<div className='right_arrow_logo'>
    <img src={right} alt=''></img>
</div>

                      </div>




                </section>
        );
}




export default CarouselProduct;