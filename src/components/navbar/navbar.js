import React from 'react'
import {withRouter} from 'react-router-dom';
import './style.css'
import Image from '../../assets/images/dashboard.png'
import OrderImage from '../../assets/images/54-copy.png'
import ManuImage from '../../assets/images/3-copy.png'
import SideManuImage from '../../assets/images/3-copy-7.png'
import ProfileImage from '../../assets/images/3-copy-6.png'
import SaleImage from '../../assets/images/3-copy-8.png'
import SettingImage from '../../assets/images/3-copy-4.png'
const NavBar = (props) => {
    let {history} = props;
    return (
        <div className="container-fluid navbar-main">
            <div className="container-navbar">
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/")}>
                    <div className="image-first-block">
                        <img className="icons" src={Image} alt="not found"/>
                    </div>
                    <div>Dashboard</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/orders")}>
                    <div className="image-first-block">
                        <img className="icons" src={OrderImage} alt="not found"/>
                    </div>
                    <div>Orders</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/menu")}>
                    <div className="image-first-block">
                        <img className="icons" src={ManuImage} alt="not found"/>
                    </div>
                    <div>Menu</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/side-dish")}>
                    <div className="image-first-block">
                        <img className="icons" src={SideManuImage} alt="not found"/>
                    </div>
                    <div>Side Dish</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/profile")}>
                    <div className="image-first-block">
                        <img className="icons" src={ProfileImage} alt="not found"/>
                    </div>
                    <div>Profile</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/sales-report")}>
                    <div className="image-first-block">
                        <img className="icons" src={SaleImage} alt="not found"/>
                    </div>
                    <div>Sales</div>
                </div>
                <div className="first-block cursor-pointer"
                     onClick={() => history.push("/settings")}>
                    <div className="image-first-block">
                        <img className="icons" src={SettingImage} alt="not found"/>
                    </div>
                    <div>Settings</div>
                </div>
            </div>
        </div>
    );
}
export default withRouter(NavBar);