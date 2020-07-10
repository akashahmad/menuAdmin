import React from 'react'
import './style.css'
import Logo from '../../assets/images/logo.png'
import Icon from '../../assets/images/bitmap.png'
import DownwardArrow from '../../assets/images/dropdown-arrow.png'

export default () => {
    return (
        <div className="container-fluid">
            <div className="main-div-of-header">
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                {/* text , user-img and icon */}
                <div className="text-and-icon fnt-family-openSans">
                    <div>
                        <h6>Hello! John Doe</h6>
                    </div>
                    <div className="user-img">
                        <img src={Icon} alt="icon"/>
                    </div>
                    <div className="downward-arrow">
                        <img src={DownwardArrow} alt="downward-arrow"/>
                    </div>
                </div>
            </div>
        </div>
    );
}