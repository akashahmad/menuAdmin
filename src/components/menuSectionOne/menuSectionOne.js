/**
 * Created by Hajira Razzaq on 7/10/2020.
 */
import React, {useState}from 'react'
import './style.css'
//import images
import Searchimage from '../../assets/images/search.png'
import UpwardArrow from '../../assets/images/white-upward-arrow.png'
import DropdownArrow from '../../assets/images/white-down-arrow.png'
export default () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    return (
        <div className="container-fluid">
            <div className="menu-container-menu-bar">
                {/*menu list*/}
                <div className="menu-list-block">
                    <ul className=" f-fm-OpenSans f-s-16 f-w-nomal f-w-str-normal f-sty-normal line-h-normal letter-spc-normal menu-ul txt-color-gray ">
                        <li className="menu-ul-li">Menu A</li>
                        <li className="menu-ul-li">Menu B</li>
                        <li className="menu-ul-li">Menu C</li>
                        <li className="menu-ul-li">Menu D</li>
                    </ul>
                </div>
                {/*search and action*/}
                <div className="menu-search-action">
                    <div className="search-main-div">
                        <input className="menu-search-box" type="text" placeholder="Search.."/>
                        <div className="menu-search-icon"><img src={Searchimage} alt="search-icon"/></div>
                    </div>

                    <div className="Actions-main-div">
                        {/*Actions*/}
                        <div className="Action-heading-icon" onClick={() => {
                            dropDownMenu ? setDropDownMenu(false) : setDropDownMenu(true)
                        }}>
                            <div>
                                <p className="menu-action-box f-w-str-normal f-w-nomal f-sty-normal line-h-normal letter-spc-normal f-fm-OpenSans">
                                    Actions
                                </p>
                            </div>
                            <div className="menu-dropdown-icon">
                                <img src={dropDownMenu ? UpwardArrow : DropdownArrow} alt="dropdwon-icon"/>
                            </div>
                        </div>
                        {/*dropdown list*/}
                        <div
                            className={dropDownMenu ? "dropdown-content display-block f-fm-OpenSans f-s-16 f-w-normal f-str-normal f-sty-normal "
                                : "display-none"}>
                            <li >Add New Menu</li>
                            <li>Add New Category</li>
                            <li >Add New Dish</li>
                            <li>Delete Menu</li>
                            <li>Delete Category</li>
                            <li >Delete Dish</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}