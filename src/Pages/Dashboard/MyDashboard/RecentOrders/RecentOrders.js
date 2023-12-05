import React from "react";
import "./RecentOrders.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// import cieditcard from "../../../../assets/myDashboard/credit.svg";
import userActive from "../../../../assets/myDashboard/userActive.png";
import user1 from "../../../../assets/myDashboard/user1.png";
import user2 from "../../../../assets/myDashboard/user2.png";
import user3 from "../../../../assets/myDashboard/user3.png";
import user4 from "../../../../assets/myDashboard/user4.png";

// logo
import verified from "../../../../assets/myDashboard/verified.svg";
import logoActive from "../../../../assets/myDashboard/logoActive.svg";
import modul from "../../../../assets/myDashboard/modul.svg";
const RecentOrders = () => {
  return (
    <div className="" style={{ marginTop: "40px" }}>
      <div className="row " style={{ gap: "100px" }}>
        <div className="col-lg-4" style={{ paddingLeft: "160px" }}>
          <div className=" gap-4  grid_section_one">
            <div className="">
              <div className="dashboard_right_card text-center mt-2">
                <p className="right_text_grap">Products You Ordered</p>
                <h6 className="number_style">6541165</h6>
              </div>

              <div className="dashboard_right_card text-center mt-2">
                <p className="right_text_grap">Products in Your Cart 56</p>
                <h6 className="number_style_two_card">6541165</h6>
              </div>

              <div className="dashboard_right_card text-center mt-2">
                <p className="right_text_grap">Products in Your Cart 56</p>
                <h6 className="number_style_thrad_card">6541165</h6>
              </div>

              <div className="dashboard_right_card text-center mt-2">
                <p className="right_text_grap">Products in Your Cart 56</p>
                <h6 className="number_style_fourth_card">6541165</h6>
              </div>
            </div>

            <div>
              {/* two section  card */}

              <div className="left_site_section_two align-items-center">
                <p className="two_section_one">Default Address</p>
                <h6 className="two_section_title_one gap-2">
                  Home Address{" "}
                  <button className="but_default_style">
                    {" "}
                    <span className="defuald_text">Default</span>
                  </button>
                </h6>
                <p className="two_section_one">
                  4135 Parkway Street, Los Angeles, CA, 90017. Mobile:
                  1234567890
                </p>
              </div>
              {/* card two  */}

              {/* <div>
<div className="style_section_two" >
<div> 
<p className="default_payment">Default Payment</p>
<div className="d-flex align-items-center gap-2">
<img style={{width:"20px",height:"20px"}} src={cieditcard} alt=""></img>
<span className="credit_title">Credit or debit card</span>

<button className="but_default_style"><span className="defuald_text">Default</span></button>  
</div>

</div>

<div class="indicator">
<span class="indicator-item badge badge-primary">Required</span>
<input type="text" placeholder="Your email address" class="form-control" />
</div>



</div>
</div>
*/}

              {/* ///    Get More Done Together With US section setup  */}

              <div
                className="get_more_done_dashboard_style"
                style={{ margin: "50px" }}
              >
                <div
                  className="p-4"
                  style={{ marginLeft: 14, marginTop: 30, padding: "10px" }}
                >
                  <h4
                    className="get_more_text_dashboard"
                    style={{ marginTop: 33 }}
                  >
                    Get More Done Together With US
                  </h4>
                  <p className="get_more_paragraps_setyle mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    className="button_style_get-dashboard mt-3"
                    style={{ marginLeft: 59 }}
                  >
                    <span className="button_dashboard_style">Get Started</span>
                  </button>
                </div>
              </div>

              {/* ///    Get More Done Together With US  section setup  */}
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="grid_section_one " style={{ gap: "70px" }}>
            {/* Recent Orders section setup  */}
            <div
              className="right_site_thre_section "
              style={{ marginLeft: 100 }}
            >
              <p className="resent_orders"> Recent Orders</p>

              <div className="d-flex" style={{ gap: "20px" }}>
                <button className="all_dasboard_button">
                  <span className="all_text_dashboard">All</span>
                </button>

                <button className="style_with_button">
                  <span className="style_with_text_style">Due</span>
                </button>

                <button className="style_with_button">
                  <span className="style_with_text_style">Delivered</span>
                </button>

                <button className="style_with_button">
                  <span className="style_with_text_style">Canceled </span>
                </button>
              </div>

              <div className="">
                <div
                  className="d-flex  py-4 align-items-center "
                  style={{ gap: "37px", marginBottom: 55 }}
                >
                  <div>
                    <h6>Order #4561651</h6>
                    <p>Placed On: 10 Jan,2023 at 10.30am </p>
                  </div>
                  <div>
                    <h6>SAR 5616.51</h6>
                    <p>6 items</p>
                  </div>
                </div>
                <hr className="hr_style"></hr>
              </div>

              <div className="">
                <div
                  className="d-flex  py-4 align-items-center "
                  style={{ gap: "37px", marginBottom: 55 }}
                >
                  <div>
                    <h6>Order #4561651</h6>
                    <p>Placed On: 10 Jan,2023 at 10.30am </p>
                  </div>
                  <div>
                    <h6>SAR 5616.51</h6>
                    <p>6 items</p>
                  </div>
                </div>
                <hr className="hr_style"></hr>
              </div>

              <div className="">
                <div
                  className="d-flex  py-4 align-items-center "
                  style={{ gap: "37px", marginBottom: 55 }}
                >
                  <div>
                    <h6>Order #4561651</h6>
                    <p>Placed On: 10 Jan,2023 at 10.30am </p>
                  </div>
                  <div>
                    <h6>SAR 5616.51</h6>
                    <p>6 items</p>
                  </div>
                </div>
                <hr className="hr_style"></hr>
              </div>

              <div className="">
                <div
                  className="d-flex  py-4 align-items-center "
                  style={{ gap: "37px", marginBottom: 55 }}
                >
                  <div>
                    <h6>Order #4561651</h6>
                    <p>Placed On: 10 Jan,2023 at 10.30am </p>
                  </div>
                  <div>
                    <h6>SAR 5616.51</h6>
                    <p>6 items</p>
                  </div>
                </div>
                <hr className="hr_style"></hr>
              </div>
            </div>
            {/* Recent Orders section setup  */}

            {/* Recent Messages  section setup  */}
            <div
              className="right_site_thre_section"
              style={{ marginLeft: -24 }}
            >
              <div>
                <p className="resent_orders">Recent Messages </p>

                <div className="d-flex" style={{ gap: "20px" }}>
                  <button className="all_dasboard_button">
                    <span className="all_text_dashboard">All</span>
                  </button>

                  <button className="style_with_button">
                    <span className="style_with_text_style">Read</span>
                  </button>

                  <button className="style_with_button">
                    <span className="style_with_text_style">Unread</span>
                  </button>
                </div>

                {/* two section  */}
                <div>
                  <div className="user_body_dashboard">
                    <div className="d-flex align-items-center justify-content-between user_body_dashboard">
                      <div className="d-flex gap-2 align-items-center">
                        <div>
                          <img
                            src={userActive}
                            style={{
                              marginTop: "10px",
                              height: " 17.727px",
                              borderRadius: "63.818px",
                              width: "63.818px",
                              height: "63.818px",
                              flexShrink: 0,
                            }}
                            className="card-img-top mx-auto"
                            alt="..."
                          />

                          <img
                            src={logoActive}
                            style={{
                              marginTop: "60px",
                              height: " 11.37px",
                              borderRadius: "63.818px",
                              marginLeft: -20,
                              width: "11.37px",
                              flexShrink: 0,
                            }}
                            className="position-absolute"
                            alt="..."
                          />
                        </div>
                        <div className="mt-4">
                          <p className="dashboard_user_name">
                            Fatima Begum{" "}
                            <span>
                              {" "}
                              <img
                                style={{ width: "10.667px", height: "16px" }}
                                src={modul}
                                alt=""
                              ></img>
                            </span>{" "}
                          </p>
                          <p className="dashboard_user_auto_chat">
                            {" "}
                            Hey! Its Fatima. How can i help you?{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-center time_style">45 mins</span>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="user_body_dashboard">
                    <div className="d-flex align-items-center justify-content-between user_body_dashboard">
                      <div className="d-flex gap-2 align-items-center">
                        <div>
                          <img
                            src={user2}
                            style={{
                              marginTop: "10px",
                              height: " 17.727px",
                              borderRadius: "63.818px",
                              width: "63.818px",
                              height: "63.818px",
                              flexShrink: 0,
                            }}
                            className="card-img-top mx-auto"
                            alt="..."
                          />
                        </div>
                        <div className="mt-4">
                          <p className="dashboard_user_name">
                            Fatima Begum{" "}
                            <span>
                              {" "}
                              <img
                                style={{ width: "10.667px", height: "16px" }}
                                src={verified}
                                alt=""
                              ></img>
                            </span>{" "}
                          </p>
                          <p className="dashboard_user_auto_chat">
                            {" "}
                            Hey! Its Fatima. How can i help you?{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-center time_style">45 mins</span>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}

                  <div className="user_body_dashboard">
                    <div className="d-flex align-items-center justify-content-between user_body_dashboard">
                      <div className="d-flex gap-2 align-items-center">
                        <div>
                          <img
                            src={user3}
                            style={{
                              marginTop: "10px",
                              height: " 17.727px",
                              borderRadius: "63.818px",
                              width: "63.818px",
                              height: "63.818px",
                              flexShrink: 0,
                            }}
                            className="card-img-top mx-auto"
                            alt="..."
                          />
                        </div>
                        <div className="mt-4">
                          <p className="dashboard_user_name">Fatima Begum </p>
                          <p className="dashboard_user_auto_chat">
                            {" "}
                            Hey! Its Fatima. How can i help you?{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-center time_style">45 mins</span>
                      </div>
                    </div>
                  </div>
                  {/* 4//////////// */}
                  <div className="user_body_dashboard">
                    <div className="d-flex align-items-center justify-content-between user_body_dashboard">
                      <div className="d-flex gap-2 align-items-center">
                        <div>
                          <img
                            src={userActive}
                            style={{
                              marginTop: "10px",
                              height: " 17.727px",
                              borderRadius: "63.818px",
                              width: "63.818px",
                              height: "63.818px",
                              flexShrink: 0,
                            }}
                            className="card-img-top mx-auto"
                            alt="..."
                          />
                        </div>
                        <div className="mt-4">
                          <p className="dashboard_user_name">
                            Fatima Begum{" "}
                            <span>
                              {" "}
                              <img
                                style={{ width: "10.667px", height: "16px" }}
                                src={verified}
                                alt=""
                              ></img>
                            </span>{" "}
                          </p>
                          <p className="dashboard_user_auto_chat">
                            {" "}
                            Hey! Its Fatima. How can i help you?{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-center time_style">45 mins</span>
                      </div>
                    </div>
                  </div>
                  <div className="user_body_dashboard">
                    <div className="d-flex align-items-center justify-content-between user_body_dashboard">
                      <div className="d-flex gap-2 align-items-center">
                        <div>
                          <img
                            src={user4}
                            style={{
                              marginTop: "10px",
                              height: " 17.727px",
                              borderRadius: "63.818px",
                              width: "63.818px",
                              height: "63.818px",
                              flexShrink: 0,
                            }}
                            className="card-img-top mx-auto"
                            alt="..."
                          />

                          <img
                            src={logoActive}
                            style={{
                              marginTop: "60px",
                              height: " 11.37px",
                              borderRadius: "63.818px",
                              marginLeft: -20,
                              width: "11.37px",
                              flexShrink: 0,
                            }}
                            className="position-absolute"
                            alt="..."
                          />
                        </div>
                        <div className="mt-4">
                          <p className="dashboard_user_name">
                            Fatima Begum{" "}
                            <span>
                              {" "}
                              <img
                                style={{ width: "10.667px", height: "16px" }}
                                src={verified}
                                alt=""
                              ></img>
                            </span>{" "}
                          </p>
                          <p className="dashboard_user_auto_chat">
                            {" "}
                            Hey! Its Fatima. How can i help you?{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-center time_style">45 mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Messages  section setup  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
