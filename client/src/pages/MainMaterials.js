import React, { useState } from "react";
import '../index.css';
import MainMaterial from '../assets/MainMaterials.svg';

export default function MainMaterials() {
  return (
    <div>
      <img className="mainPic" src={MainMaterial} />
    </div>
  );
}
