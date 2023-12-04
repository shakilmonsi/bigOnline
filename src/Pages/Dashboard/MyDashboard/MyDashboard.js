import React from "react";
import "./MyDashboard.css";
import paidlogo from "../../../assets/myDashboard/unpaid.png";

const MyDashboard = () => {
  return (
    <div>
      <h3 className="text-center">My Dashboard</h3>

      <div
        className="grid_col_style"
        style={{ gap: "20px", paddingLeft: "160px", paddingRight: "20px" }}
      >
        <div className="">
          <div className="admin_card_style  text-center" >
            <p className="grap_text_style">Wallet Balance</p>

            <h6 className="title_admin_style">SAR 6516521.00</h6>
          </div>
        </div>

        <div className=" justify-content-center">
          <div className="admin_card_style imtems-center">
            <p className="grap_text_style d-flex align-items-center gap-2">
              Available Points{" "}
              <span>
                <img className="paid_logo_style" src={paidlogo} alt=""></img>
              </span>
            </p>

            <h6 className="title_admin_style">6516521.00</h6>
          </div>
        </div>

        <div className="justify-content-center">
          <div className="admin_card_style  text-center">
            <p className="grap_text_style">Wallet Balance</p>

            <h6 className="title_admin_style">SAR 6516521.00</h6>
          </div>
        </div>
        <div className=" justify-content-center">
          <div className="admin_card_style text-center">
            <p className="grap_text_style">Wallet Balance</p>

            <h6 className="title_admin_style">SAR 6516521.00</h6>
          </div>
        </div>
        <div className="">
          <div className="admin_button_style">
            <button className="button_recharge">
              <span className="button_recharge_text">Recharge Balance</span>
            </button>

            <button className="button_point mt-2" style={{ border: "none" }}>
              <span className="button_point_text">Convert Point</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
