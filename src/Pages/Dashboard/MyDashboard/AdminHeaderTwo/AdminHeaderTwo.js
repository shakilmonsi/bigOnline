import React from 'react';
import "./AdminHeadertwo.css"

import { Link } from 'react-router-dom';
const AdminHeaderTwo=()=> {
    return (

        <div className='mt-2 'style={{paddingLeft:"100px",paddingRight:"100px"}}>


            <nav className="navbar admin_nevber_style ">





<div className='d-flex align-items-center '  style={{gap:13,textDecoration:"none",padding:"30px",gap:"35px"}}>
   
    

        <Link className='taxt_link_style_admin'>Dashboard</Link>
        <Link className='taxt_link_style_admin'>Profile</Link>
        <Link className='taxt_link_style_admin'>Addresses</Link>
        <Link className='taxt_link_style_admin'>Payments</Link>
        <Link className='taxt_link_style_admin'>Wallet</Link>
        <Link className='taxt_link_style_admin'>Point</Link>
        <Link className='taxt_link_style_admin'>Following</Link>
        <Link className='taxt_link_style_admin'>Inbox</Link>
        <Link className='taxt_link_style_admin'>Wishlist</Link>
        <Link className='taxt_link_style_admin'>My Orders</Link>
        <Link className='taxt_link_style_admin'>Searches</Link>

        

</div>





</nav>

    </div>
    );
}


export default AdminHeaderTwo;