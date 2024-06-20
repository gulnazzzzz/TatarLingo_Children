import React, { useState } from "react";
import '../index.css';
import MainMaterial from '../assets/MainMaterials.svg';
import Footer from '../components/Footer'; 

export default function MainMaterials() {
  return (
    <>
    <div>
      <img className="mainPic" src={MainMaterial} />
    </div>
    <Footer />
    </>
  );
}
