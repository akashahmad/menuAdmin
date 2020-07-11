import  React from 'react'
import './style.css'
export default ()=>{
    return(
        <div>
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"/>
            </label>
        </div>
    );
}