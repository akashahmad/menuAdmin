import React from 'react'
import DownwardArrow from '../../assets/images/dropdown-arrow.png'
import './style.css'

export default () => {
    return (
        <div className="container-fluid dashboard-main">
            <div className="container main-div-for-padding">
                <div className="dashboard-inner">
                    {/* 1st card */}
                    <div className="card fnt-family-openSans">
                        <div><span>45</span></div>
                        <div><p>Dishes</p></div>
                    </div>
                    {/* 2nd card */}
                    <div className="card fnt-family-openSans">
                        <div><span>15</span></div>
                        <div><p>Orders</p></div>
                    </div>
                    {/* 3rd card */}
                    <div className="card fnt-family-openSans">
                        <div><span>10</span></div>
                        <div><p>Tables</p></div>
                    </div>
                    {/* 4th card */}
                    <div className="card fnt-family-openSans">
                        <div><span>$3200.00</span></div>
                        <div><p>Today's Sales</p></div>
                    </div>
                </div>
                {/* heading */}
                <div className="heading-orders">
                    <h3>Orders</h3>
                </div>
                {/* Tables */}
                {/* table styling added in table.css file */}
                <div className="main-div-of-table">
                    {/* heading section starts from here */}
                    <div className="heading-section-of-table">
                        {/*headings*/}
                        <ul>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Table #</span></li>
                            </div>
                            <div className="img-ordered-heading">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Ordered Menu</span></li>
                            </div>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Date</span></li>
                            </div>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Time</span></li>
                            </div>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Order Status</span></li>
                            </div>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Bill Amount</span></li>
                            </div>
                            <div className="img-name">
                                <li><img className="downward-arrow-adjustment" src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Action</span></li>
                            </div>
                        </ul>
                    </div>
                    {/* body */}
                    <div className="body-section-of-table">
                        {/*headings*/}
                        <ul>
                            <div className="img-name">
                                <li><span>Table 1</span></li>
                            </div>
                            <div className="img-ordered-heading">
                                <li><span>Creamy Tomato Pasta,Blueberry Angel Dessert</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>06/05/2020</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>8:30 PM</span></li>
                            </div>
                            <div className="img-name">
                                <li><div className="dot"></div></li>
                                <li><span>Served</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>$ 100.00</span></li>
                            </div>
                            <div className="img-name cursor-pointer">
                                <li><span className="button-generate">Generate Bill</span></li>
                            </div>
                        </ul>
                    </div>
                    {/* 2nd row */}
                    <div className="body-section-of-table">
                        {/*headings*/}
                        <ul>
                            <div className="img-name">
                                <li><span>Table 1</span></li>
                            </div>
                            <div className="img-ordered-heading">
                                <li><span>Creamy Tomato Pasta,Blueberry Angel Dessert</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>06/05/2020</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>8:30 PM</span></li>
                            </div>
                            <div className="img-name">
                                <li><div className="dot"></div></li>
                                <li><span>Served</span></li>
                            </div>
                            <div className="img-name">
                                <li><span>$ 100.00</span></li>
                            </div>
                            <div className="img-name cursor-pointer">
                                <li><span className="button-generate">Generate Bill</span></li>
                            </div>
                        </ul>
                    </div>
                    {/* body section ends here */}
                </div>
            </div>
        </div>
    );
}