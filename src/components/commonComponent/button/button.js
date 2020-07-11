import React from 'react'
import  './style.css'
export default (props)=>{
    let{
        text
    }=props
    return(
        <button className="common-button">{text}</button>
        );
}