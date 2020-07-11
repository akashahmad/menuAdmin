import React from 'react'
import DownwardArrow from '../../assets/images/dropdown-arrow.png'
import './style.css'
import DateTimePicker from 'react-datetime-picker';
import Searchimage from '../../assets/images/search.png'

export default () => {
    return (
        <div className="container-fluid">
            <div className="container main-div-of-orders">
                {/* filters for searching data */}
                <div className="main-div-of-filters">
                    <div className="inside-div-of-filters">
                        <ul>
                            <li>All</li>
                            <li>Served</li>
                            <li>In Queue</li>
                            <li>Not Ordered</li>
                            <li>Check Out</li>
                            <li>Cancelled</li>
                        </ul>
                        <div className="search-data">
                            <input placeholder="Search..."/>
                            <img src={Searchimage} alt="search-icon" />
                        </div>
                        <div className="date-time-picker">
                            <DateTimePicker
                                // onChange={this.onChange}
                                // value={this.state.date}
                            />
                        </div>
                    </div>
                </div>
                {/* table styling added in table.css file */}
                <div className="main-div-of-table">
                    {/* heading section starts from here */}
                    <div className="heading-section-of-table">
                        {/*headings*/}
                        <ul>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Table #</span></li>
                            </div>
                            <div className="img-ordered-heading">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Ordered Menu</span></li>
                            </div>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Date</span></li>
                            </div>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Time</span></li>
                            </div>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Order Status</span></li>
                            </div>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
                                <li><span>Bill Amount</span></li>
                            </div>
                            <div className="img-name">
                                <li><img src={DownwardArrow} alt="downward-arrow" /></li>
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
                            <div className="img-name">
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
                            <div className="img-name">
                                <li><span className="button-generate">Generate Bill</span></li>
                            </div>
                        </ul>
                    </div>
                    <div className="body-section-of-table">
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
                            <div className="img-name">
                                <li><span className="button-generate">Generate Bill</span></li>
                            </div>
                        </ul>
                    </div>
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
                            <div className="img-name">
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