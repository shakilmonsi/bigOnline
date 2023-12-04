import React from "react";
import "./AdminHeader.css";
import adminimg from "../../../../assets/myDashboard/adminimg.png";
import email from "../../../../assets/myDashboard/email.png";
import phone from "../../../../assets/myDashboard/phone.svg";
import date from "../../../../assets/myDashboard/date.svg";

const AdminHeader = () => {
  return (
    <div style={{paddingLeft:"100px",paddingRight:"100px",marginTop:"47px"}}>
         <div
      className=" d-flex justify-content-between  naver_style_admin"
      style={{ gap: 550 ,}}
    >

      <div className="d-flex  align-items-cente gap-3">
        <div className="admin_profile">
          <img
            className="admin_profile_img"
            style={{ marginLeft: -14, marginTop: -14 }}
            src={adminimg}
            alt=""
          ></img>
        </div>

        <div>
          <div className="d-flex gap-2 mt-2  align-items-cente">
            <span className="admin_name_style">Shahadat Hossain Mojumder</span>
          </div>

          <div>
            <div className="mt-1 d-flex gap-4">
              <div className="d-flex gap-1">
                <img
                  className="setu"
                  src={email}
                  style={{
                    marginTop: 11,
                    width: "12px",
                    height: "12px",
                    flexShrink: 0,
                  }}
                  alt=""
                ></img>
                <h5
                  className="mt-2"
                  style={{
                    fontSize: "14px",
                    color: "#2A2A2A",
                    fontFamily: "Inter",
                    lineHeight: "normal",
                    fontStyle: "normal",
                  }}
                >
                  nurnovi@gmail.com
                </h5>
              </div>{" "}
              <span className="line_style mt-2"></span>
              <div className="d-flex gap-2 ">
                <div className="d-flex gap-1 mt-1">
                  <img
                    className="mt-1"
                    src={phone}
                    alt=""
                    style={{
                      width: "9px",
                      height: "11px",
                      color: "#424242",
                      flexShrink: 0,
                    }}
                  ></img>
                  <p
                    className=" "
                    style={{
                      widows: "auto",
                      fontWeight: 500,
                      fontSize: "13px",
                      color: "#868585",
                    }}
                  >
                    +410 05620036
                  </p>
                </div>
              </div>{" "}
              <span className="line_style mt-2"></span>
              <div className="d-flex gap-4 mt-2">
                <span
                  className="mx-auto"
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "normal",
                    color: "#6A6969",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={date}
                    alt=""
                    style={{ width: "10px", height: "10x", color: "#F5B100" }}
                  ></img>{" "}
                  Joined 13th June 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button className="button_style_dashboard" style={{ border: "none" }}>
          <span className="follow_button_style">Sign out</span>
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default AdminHeader;
