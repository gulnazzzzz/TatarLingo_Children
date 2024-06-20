import React, { useState } from "react";
import '../index.css';
import MainReport from '../assets/MainReports.svg';
import Footer from '../components/Footer'; 


export default function MainReports() {
  return (
    <>
      <div>
      <img className="mainPic" src={MainReport} />
    </div>
    <Footer />
    </>
  );
}