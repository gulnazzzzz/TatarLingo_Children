import React, { useState } from "react";
import '../index.css';
import MainLesson from '../assets/MainLessons.svg';

export default function MainLessons() {
  return (
    <div>
      <img className="mainPic" src={MainLesson} />
    </div>
  );
}
