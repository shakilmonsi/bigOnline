import React from "react";
import "./MyOrderRightSite.css";
import downarrow from "../../../../assets/myDashboard/myorderlogo/down arrow.svg";
import promotor from "../../../../assets/myDashboard/myorderlogo/promoter.png";
import userlogo from "../../../../assets/myDashboard/myorderlogo/userlogo.png";
//  order img and logo
import reding from "../../../../assets/myDashboard/myorderlogo/reding.svg";
import wtdthreding from "../../../../assets/myDashboard/myorderlogo/wtdthreding.svg";
import phoneimg from "../../../../assets/myDashboard/myorderlogo/image 1.png";
import Delivered from "../../../../assets/myDashboard/myorderlogo/dekvered.png";
import OrderProcessed from "../../../../assets/myDashboard/myorderlogo/OrderProcessed.png";
//  order img and logo right site logo 
import widthDot from "../../../../assets/myDashboard/myorderlogo/widthDot.svg";
import bleckDot from "../../../../assets/myDashboard/myorderlogo/bleckDot.svg";
import car from "../../../../assets/myDashboard/myorderlogo/car.png";
import witchLogo from "../../../../assets/myDashboard/myorderlogo/witchLogo.png";

const MyOrderRightSite = () => {
  return (
   <section  className="">
     <div className=" full_body_setup_style">
       <div  className="">
      <div className="d-flex  order_navber_style">
        <div>
          <h6 className="id_number_order gap-2">
            {" "}
            <span className="id_my_order"> ID: </span> #4561651
            <span className="item_number">(1 item)</span>
          </h6>
        </div>

        <div className="d-flex gap-2">
          <img
            src={promotor}
            style={{ width: "16px", height: "16px" }}
            alt=""
          ></img>
          <p className="promotor_name">
            <span className="mromoted_by">Promoted by :</span>Fatima
          </p>
        </div>

        <div className="d-flex gap-3 align-content-center">
          <button className="track_order_button">
            <span className="track_order_text">Track Order</span>{" "}
          </button>
          <img
            style={{ height: "5px", width: "10px", marginTop: "16px" }}
            src={downarrow}
            alt=""
          ></img>
        </div>
      </div>

      {/* card  section  */}
   

<div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className="delevired_style mb-4  gap-2">
           
             <span className="item_number"> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"20px", width:"20px"}} src={Delivered}></img>
    <h6 className="delevired_style mt-1">Delivered</h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>


   </div>
</div>






</div>
<div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className="delevired_style mb-4  gap-2">
           
             <span className="item_number"> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"20px", width:"20px"}} src={Delivered}></img>
    <h6 className="delevired_style mt-1">Delivered</h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>


   </div>
</div>






</div>

{/* ////////////////////////////////////////// 2  order system 222  cars style */}

<div>

<div className="d-flex  order_navber_style">
        <div>
          <h6 className="id_number_order gap-2">
            {" "}
            <span className="id_my_order"> ID: </span> #4561651
            <span className="item_number">(1 item)</span>
          </h6>
        </div>

        <div className="d-flex gap-2">
          <img
            src={userlogo}
            style={{ width: "16px", height: "16px" }}
            alt=""
          ></img>
          <p className="promotor_name">
            <span className="mromoted_by">Promoted by :</span>Fatima
          </p>
        </div>

        <div className="d-flex gap-3 align-content-center">
          <button className="track_order_button">
            <span className="track_order_text">Track Order</span>{" "}
          </button>
          <img
            style={{ height: "5px", width: "10px", marginTop: "16px" }}
            src={downarrow}
            alt=""
          ></img>
        </div>
      </div>
      {/* ../////////////////////   card*/}
      <div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className="delevired_style mb-4  gap-2">
           
             <span className="item_number"> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"16px", width:"25.714px"}} src={car}></img>
    <h6 className="delevired_style mt-0">Order Picked</h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>


   </div>
</div>






</div>

</div>
{/* ////////////////////////////////////////// 3  order system 3333  cars style */}

<div>

<div className="d-flex  order_navber_style">
        <div>
          <h6 className="id_number_order gap-2">
            {" "}
            <span className="id_my_order"> ID: </span> #4561651
            <span className="item_number">(1 item)</span>
          </h6>
        </div>

        <div className="d-flex gap-2">
          <img
            src={userlogo}
            style={{ width: "16px", height: "16px" }}
            alt=""
          ></img>
          <p className="promotor_name">
            <span className="mromoted_by">Promoted by :</span>Fatima
          </p>
        </div>

        <div className="d-flex gap-3 align-content-center">
          <button className="track_order_button">
            <span className="track_order_text">Track Order</span>{" "}
          </button>
          <img
            style={{ height: "5px", width: "10px", marginTop: "16px" }}
            src={downarrow}
            alt=""
          ></img>
        </div>
      </div>
      {/* ../////////////////////   card*/}
      <div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className="delevired_style mb-4  gap-2">
           
             <span className="item_number "> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"20px", width:"20px"}} src={OrderProcessed}></img>
    <h6 className="delevired_style mt-1">Order Processed</h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>

    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>


   </div>
</div>






</div>

</div>

{/* ////////////////////////////////////////// 4  order system 4444  cars style */}

<div>

<div className="d-flex  order_navber_style">
        <div>
          <h6 className="id_number_order gap-2">
            {" "}
            <span className="id_my_order"> ID: </span> #4561651
            <span className="item_number">(1 item)</span>
          </h6>
        </div>

        <div className="d-flex gap-2">
          <img
            src={userlogo}
            style={{ width: "16px", height: "16px" }}
            alt=""
          ></img>
          <p className="promotor_name">
            <span className="mromoted_by">Promoted by :</span>Fatima
          </p>
        </div>

        <div className="d-flex gap-3 align-content-center">
          <button className="track_order_button">
            <span className="track_order_text">Track Order</span>{" "}
          </button>
          <img
            style={{ height: "5px", width: "10px", marginTop: "16px" }}
            src={downarrow}
            alt=""
          ></img>
        </div>
      </div>
      {/* ../////////////////////   card*/}
      <div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className=" delevired_style mb-4  gap-2">
           
             <span className="item_number "> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"20px", width:"20px"}} src={OrderProcessed}></img>
    <h6 className="delevired_style mt-1">Order Confirmed</h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>

    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>


   </div>
</div>






</div>

</div>


{/* ////////////////////////////////////////// 5555  order system 55555  cars style */}

<div>

<div className="d-flex  order_navber_style">
        <div>
          <h6 className="id_number_order gap-2">
            {" "}
            <span className="id_my_order"> ID: </span> #4561651
            <span className="item_number">(1 item)</span>
          </h6>
        </div>

        <div className="d-flex gap-2">
          <img
            src={userlogo}
            style={{ width: "16px", height: "16px" }}
            alt=""
          ></img>
          <p className="promotor_name">
            <span className="mromoted_by">Promoted by :</span>Fatima
          </p>
        </div>

        <div className="d-flex gap-3 align-content-center">
          <button className="track_order_button">
            <span className="track_order_text">Track Order</span>{" "}
          </button>
          <img
            style={{ height: "5px", width: "10px", marginTop: "16px" }}
            src={downarrow}
            alt=""
          ></img>
        </div>
      </div>
      {/* ../////////////////////   card*/}
      <div className="order_card_body_style">
<div className="d-flex  card_section">
        <div>
          <img
            style={{ width: "66px", height: "80px" }}
            src={phoneimg}
            alt=""
          ></img>
        </div>

        <div className="text_dorotion">
         <div>
         <p className="iphone_name_style " style={{marginTop:"25px"}}>iPhone 14 pro max</p>
         </div>

          <div className="d-flex mb-2">
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={reding}
              alt=""
            ></img>
            <img
              style={{ width: "14.07px", height: "14px" }}
              src={wtdthreding}
              alt=""
            ></img>
          </div>
          <div className="d-flex gap-2">
            <del className="del_price_order">SAR 999.00 </del>
            <h6 className="main_price">sar 699 </h6>
          </div>

          <div>
            <p className=" delevired_style mb-4  gap-2">
           
             <span className="item_number "> color : </span> 
             black
            </p>
            
          </div>
        </div>
      </div>

      

  {/* two number   */}
<div>
    <p className="delevired_style"> <span className="item_number">QTY : </span>2</p>
</div>


  {/* thre number   */}
<div>
    <p className="delevired_style"> <span className="item_number">Total :  </span> SAR  699.00  </p>
</div>

  {/* four number   */}
<div>
   <div className="d-flex  align-content-center gap-2 ">
    <img style={{height:"18px", width:"18px"}} src={witchLogo}></img>
    <h6 className="delevired_style mt-1">In progress </h6>
   </div>
   
   {/* 111  */}
   <div className="d-flex align-content-center mt-2">

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={bleckDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>
    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>

    <span className='myorder_line_style'></span>

    <img style={{height:"10px",width:"10px",color:"#2A2A2AE5"}} src={widthDot} alt=""></img>


   </div>
</div>






</div>

</div>





   </div>
    </div>
   </section>
   
  );
};

export default MyOrderRightSite;
