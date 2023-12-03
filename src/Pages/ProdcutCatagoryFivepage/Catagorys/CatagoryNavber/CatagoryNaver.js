import React from 'react';
import "./catagoryNaver.css"
import user from "../../../../assets/CatagoryFiveAllLogo/user.png"
import medal from "../../../../assets/CatagoryFiveAllLogo/medal.svg"
import promoter from "../../../../assets/CatagoryFiveAllLogo/promoter.png"
import rating from "../../../../assets/CatagoryFiveAllLogo/rating.svg"
import userlogo from "../../../../assets/CatagoryFiveAllLogo/userlogo.svg"

 import sharelopg from "../../../../assets/CatagoryFiveAllLogo/share.svg"
 import chatnow from "../../../../assets/CatagoryFiveAllLogo/chatnow.svg"
const CatagoryNaver =()=> {
    return (

        <div className=' d-flex justify-content-between  naver_style' style={{gap:750,}}>
            <div className='d-flex  align-items-cente gap-3' >
                <div  className='user_profile'>
                <img  className='user_profile_img' style={{marginLeft:-14, marginTop:-14}} src={user} alt=''></img>

                </div>

                <div>
                  <div className='d-flex gap-2 mt-2  align-items-cente'>
                  <span className='user_name_style'>Mohammad Hamza</span>
                    <img style={{width:"13.333px",height:"20px"}} src={medal} alt=''></img>
                  </div>

                  <div>  
                   
                  <div className="mt-1 d-flex gap-4">
      
      
      <div className='d-flex gap-1'>
        <img className='setu' src={promoter} style={{ marginTop: 11, width: "12px", height: "12px", flexShrink: 0 }} alt=''></img>
        <h5 className='mt-2' style={{ fontSize: "14px", color: "#2A2A2A", fontFamily: "Inter", lineHeight: "normal", fontStyle: "normal" }}>promoter</h5>
      </div> <span className='line_style mt-2'></span>



      <div className='d-flex gap-2 '>
        <div className='d-flex gap-1 mt-1'>
          <img className='mt-1' src={userlogo} alt='' style={{
            width: "9px",
            height: "11px", color: "#424242", flexShrink: 0
          }}></img>
          <p className=' ' style={{ widows: "auto", fontWeight: 500, fontSize: "13px", color: "#868585" }}>13.3k</p>

        </div >
        <div className='' style={{ marginBottom: "10px", }} >
          <p className=' rounded mb-3' style={{
            width: "61px", height: "24px",
    
          }}>
            <span className='' style={{ textAlign: "center", fontSize: "14px", }}>Follower's</span>
          </p>         </div>

      </div>  <span className='line_style mt-2'></span>




      <div className='d-flex gap-4 mt-2'>
    
       <span className='reding_text_style'>reding</span>
          
      
          <span className='mx-auto' style={{
            fontSize: "13px", fontWeight: 500,
            fontStyle: "normal", lineHeight: "normal", color: "#6A6969", flexShrink: 0
          }}><img src={rating} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>  4.5</span>
    

      </div>



  

    </div>


                  </div>
                </div>
           
            </div>

            <div className='d-flex gap-3 align-items-cente '>
              <div className='share_logos_and_style'>
                <img style={{width:"16px",height:"16px"}} src={sharelopg} alt=''></img>
                <span>share</span>
              </div>
              <div className='share_logos_and_style'>
                <img style={{width:"16px",height:"16px"}} src={chatnow} alt=''></img>
                <span>share</span>
              </div>
              <div className=''>
            <button className='button_style'><span className='follow_button_style'>Follow</span></button>
              </div>


            </div>
        </div>
        

    );
}

export default CatagoryNaver;