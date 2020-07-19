import React from 'react'
import {withRouter} from 'react-router-dom';
import './style.css'
import Image from '../../assets/images/dashboard.png'
import ImageWhite from '../../assets/images/w-dashboard.png'
import OrderImage from '../../assets/images/54-copy.png'
import OrderImageWhite from '../../assets/images/w-54-copy.png'
import ManuImage from '../../assets/images/3-copy.png'
import ManuImageWhite from '../../assets/images/w-3-copy.png'
import SideManuImage from '../../assets/images/3-copy-7.png'
import SideManuImageWhite from '../../assets/images/w-3-copy-3.png'
import ProfileImage from '../../assets/images/3-copy-6.png'
import ProfileImageWhite from '../../assets/images/w-3-copy-6.png'
import SaleImage from '../../assets/images/3-copy-8.png'
import SaleImageWhite from '../../assets/images/w-3-copy-8.png'
import SettingImage from '../../assets/images/3-copy-4.png'
import SettingImagewhite from '../../assets/images/w-3-copy-4.png'
const NavBar = (props) => {
    let {history, location} = props;
    return (
        <div className="container-fluid navbar-main">
            <div className="container-navbar">
                <button
                    className={location.pathname === "/" ? "first-block cursor-pointer  bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/")}>
                    <div className="image-first-block">
                        <img className="icons" src={ location.pathname === "/" ? ImageWhite : Image} alt="not found"/>
                    </div>
                    <div>Dashboard</div>
                </button>
                <button
                    className={location.pathname === "/orders" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/orders")}>
                    <div className="image-first-block">
                        <img className="icons" src={location.pathname === "/orders" ? OrderImageWhite : OrderImage}
                             alt="not found"/>
                    </div>
                    <div>Orders</div>
                </button>
                <button
                    className={location.pathname === "/menu" || location.pathname === "/add-new-dish" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/menu")}>
                    <div className="image-first-block">
                        <img className="icons" src={ location.pathname === "/menu" || location.pathname === "/add-new-dish" ? ManuImageWhite : ManuImage}
                             alt="not found"/>
                    </div>
                    <div>Menu</div>
                </button>
                <button
                    className={location.pathname === "/side-dish" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/side-dish")}>
                    <div className="image-first-block">
                        <img className="icons"
                             src={location.pathname === "/side-dish" ? SideManuImageWhite : SideManuImage}
                             alt="not found"/>
                    </div>
                    <div>Side Dish</div>
                </button>
                <button
                    className={location.pathname === "/profile" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/profile")}>
                    <div className="image-first-block">
                        <img className="icons" src={location.pathname === "/profile" ? ProfileImageWhite : ProfileImage}
                             alt="not found"/>
                    </div>
                    <div>Profile</div>
                </button>
                <button
                    className={location.pathname === "/sales-report" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/sales-report")}>
                    <div className="image-first-block">
                        <img className="icons" src={location.pathname === "/sales-report" ? SaleImageWhite : SaleImage}
                             alt="not found"/>
                    </div>
                    <div>Sales</div>
                </button>
                <button
                    className={location.pathname === "/settings" ? "first-block cursor-pointer bg-clr-Orange" : "first-block cursor-pointer text-clr-light-gray"}
                    onClick={() => history.push("/settings")}>
                    <div className="image-first-block">
                        <img className="icons"
                             src={location.pathname === "/settings" ? SettingImagewhite : SettingImage}
                             alt="not found"/>
                    </div>
                    <div>Settings</div>
                </button>
            </div>
        </div>
    );
}
export default withRouter(NavBar);