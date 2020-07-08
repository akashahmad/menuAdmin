import React from 'react'
import Header from './components/header/header'
import './assets/style/style.css'
import Navbar from './components/navbar/navbar'
import Dashboard from './components/dashboard/dashboard'
export default()=>{
  return(
    <>
      <Header/>
      <Navbar/>
      <Dashboard/>
    </>
  );
}