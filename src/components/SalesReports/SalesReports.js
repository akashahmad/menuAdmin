import React, {useState} from 'react'
import './SalesReports.css'
//import components

//import images
import DatePicker from 'react-date-picker';
import PrintIcon from '../../assets/images/print.png'
export default (props) => {
    let {} = props;
    const [date, setDate] = useState(new Date());
    const dateHandler = (event) => {
        setDate(event)
    }
    console.log("date", date);
    return (
        <div className="container-fluid addNewDish-container-fluid">
            <div className="container addNewDish-container">
                {/*heading*/}
                <div className="addNewDish-container-head margin-top-bottom-30">
                    <div
                        className="p-t-10 addNewDish-container-left heading-clr f-fm-OpenSans f-s-24 f-w-600 f-w-str-normal f-sty-normal letter-spc-normal">
                        Restaurant Profile
                    </div>
                    <div className="d-flex">
                        <div className="">
                            <DatePicker
                                onChange={(event) => dateHandler(event)}
                                value={date}
                            />
                        </div>
                        <button
                            className=" small-btn common-button cursor-pointer f-fm-OpenSans f-s-16 f-w-600 f-w-str-normal f-sty-normal line-h-normal letter-spc-normal">
                            <img src={PrintIcon} alt="print-icon"/> Print
                        </button>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="w-50 sales-report-today-sales">
                        <div>
                            <div
                                className="today-sales-in-figure f-fm-OpenSans t-align-c f-w-str-normal f-sty-normal letter-spc-normal text-clr-light-gray">
                                $3200.00
                            </div>
                            <div
                                className="f-fm-OpenSans f-s-14 f-w-nomal t-align-c f-sty-normal f-w-str-normal line-h-normal letter-spc-normal heading-clr">
                                Today’s Sales
                            </div>
                        </div>

                    </div>
                    <div className="w-50 sales-report-today-sales">
                        <div>
                            <div
                                className="today-sales-in-figure f-fm-OpenSans t-align-c f-w-str-normal f-sty-normal letter-spc-normal text-clr-light-gray">
                                $3200.00
                            </div>
                            <div
                                className="f-fm-OpenSans f-s-14 f-w-nomal t-align-c f-sty-normal f-w-str-normal line-h-normal letter-spc-normal heading-clr">
                                Total Sales
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}