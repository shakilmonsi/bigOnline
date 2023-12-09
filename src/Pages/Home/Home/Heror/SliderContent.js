import React from "react";
import appointment from "../../../../assets/heroBaground/background.png"
import Sitebar from "../../../../layout/siteber/Sitebar";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section   style={{ height:4844, background: `url(${appointment})`,backgroundColor:"#000"}}>  
    <Sitebar></Sitebar>
         {sliderImage.map((slide, index) => ( <div  key={index} className={index === activeIndex ? "slides active" : "inactive"} >
      
      
    
    <div className="row">
<div className="col-lg-5">
<div className="" style={{paddingLeft:220 ,marginTop:120, rowGap:"18px"}}>
<p  className="" style={{ height: "27px", color: "#FFFFFF" }}> {slide.title}</p>
<h2 className="" style={{ color: "#FFFFFF" }}>{slide.description}</h2>
<p className="price" style={{ color: "#FFFFFF" }}>Exclusive Offer <span style={{ color: "#FFC700" }}>-35%</span> .off this week</p>
<button className="" style={{ border:"none", width: "190px", height: "60px" , backgroundColor:"#F85606",borderRadius: "10px"}} ><span style={{ fontSize: '23px', color: "#FFFFFF" }}>
shop new</span></button>
   
</div>
</div>
<div className="col-lg-5">    <img style={{paddingLeft:"80px", margin:60}} src={slide.urls} alt="" /></div>
    </div>
        </div>
      ))}
    </section>
  );
}
export default SliderContent;