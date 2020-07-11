import  React from 'react'
import './style.css'
export default ()=>{
    return(
        <div className="common-toggle-btn">
            <label className="switch ">
                <input type="checkbox"/>
                    <span className="slider round"/>
            </label>
        </div>
    );
}