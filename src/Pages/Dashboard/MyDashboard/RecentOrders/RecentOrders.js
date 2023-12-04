import React from "react";
import "./RecentOrders.css";
const RecentOrders = () => {
  return (
    <div className="grir_cols_style_product">
      <div style={{paddingLeft:"170px"}}>

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

    <div className="left_site_section_two">
<p className="two_section_one">Default Address</p>
<h6 className="two_section_title_one">Home Address <span><button></button> </span></h6>
<p className="two_section_one">4135 Parkway Street, Los Angeles, CA, 90017.
Mobile: 1234567890</p>
    </div>
</div>

    </div>
  );
};

export default RecentOrders;
