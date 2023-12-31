import React from "react";
import "./siteber.css";
import compare from "../../assets/leyoutlogo/compare (1).svg";
import chat from "../../assets/leyoutlogo/chat.svg";
import love from "../../assets/leyoutlogo/love (1).png";
import cart from "../../assets/leyoutlogo/cart.png";

const Sitebar = () => {
  return (
    <div  className='position-fixed position-absolute' style={{marginTop:"100px",marginLeft:1970}}>
      <div className="leyout_site " style={{rowGap:"18px"}}>
        <div className=" ">
          <p
            className="position-absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={cart}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>

        <div className=" ">
          <p
            className="position-absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={love}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>

        <div className=" ">
          <p
            className="position-absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={compare}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>


        <div className=" ">
          <p
            className="position-absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={chat}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sitebar;
