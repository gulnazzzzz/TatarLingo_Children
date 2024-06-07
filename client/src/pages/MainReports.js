import React, { useState } from "react";
import '../index.css';
import MainReport from '../assets/MainReports.svg';

export default function MainReports() {
  return (
    <div>
      <img className="mainPic" src={MainReport} />
    </div>
  );
}