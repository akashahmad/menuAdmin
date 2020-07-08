import React from 'react'
import './style.css'
import Image from '../../assets/images/4-copy.png'
import OrderImage from '../../assets/images/54-copy.png'
import ManuImage from '../../assets/images/3-copy.png'
import SideManuImage from '../../assets/images/3-copy-7.png'
import ProfileImage from '../../assets/images/3-copy-6.png'
import SaleImage from '../../assets/images/3-copy-8.png'
import SettingImage from '../../assets/images/3-copy-4.png'
export default()=>{
    return(
        <div className="container-fluid navbar-main">
                <div className="container-navbar">
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={Image} alt="not found"/> </div>
                            <div>Dashboard</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={OrderImage} alt="not found"/> </div>
                            <div>Orders</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={ManuImage} alt="not found"/> </div>
                            <div>Menu</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={SideManuImage} alt="not found"/> </div>
                            <div>Side Menu</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={ProfileImage} alt="not found"/> </div>
                            <div>Profile</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={SaleImage} alt="not found"/> </div>
                            <div>Sales</div>
                        </div>
                        <div className="first-block">    
                            <div className="image-first-block">  <img src={SettingImage} alt="not found"/> </div>
                            <div>Settings</div>
                        </div>
                </div>
        </div>
    );
}