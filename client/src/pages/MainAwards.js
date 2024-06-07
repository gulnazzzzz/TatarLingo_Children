import React, { useState } from "react";
import '../index.css';
import MainAward from '../assets/MainAwards.svg';

export default function MainAwards() {
  return (
    <div>
      <img className="mainPic" src={MainAward} />
    </div>
  );
}
