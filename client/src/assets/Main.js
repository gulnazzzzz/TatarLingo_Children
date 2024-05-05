import React, { useState } from "react";
import '../index.css';
import MainBlock from '../assets/MainBlock.svg';
import Second from '../assets/SecondBlock1.svg';

import MainLearn from '../assets/MainLearn.svg';
import MainPlay from '../assets/MainPlay.svg';
import Accordion from '../components/Accordion'; 

export default function Main() {

  const [background, setBackground] = useState(MainBlock);
  const [backgroundWhat, setBackgroundWhat] = useState(MainLearn);

  const handleFirstButton = () => {
    setBackground(MainBlock);
  };
  const handleSecondButton = () => {
    setBackground(Second);
  };

  const handleLearnButton = () => {
    setBackgroundWhat(MainLearn);
  };
  const handlePlayButton = () => {
    setBackgroundWhat(MainPlay);
  };

  document.addEventListener('DOMContentLoaded', function () {
  const accordionTitles = document.querySelectorAll('.accordion-item_title');

  accordionTitles.forEach(title => {
    title.addEventListener('click', function () {
      // Переключаем класс 'active' для заголовка и для блока с содержимым
      this.parentElement.classList.toggle('active');
      const content = this.parentElement.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.opacity = '0';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = '1';
      }
    });
  });
});

  return (
    <main className="main">
      <section className="mainPage">
          <div className="mainView__block" >
            <img className="mainView__img" src={background} alt="Background" />
            <div className="main_buttons">
              <button 
                className={`mainView_button ${background === MainBlock ? 'active_button' : ''}`} 
                onClick={handleFirstButton}>
                Детсадовцы 3+
              </button>
              <button 
                className={`mainView_button ${background === Second ? 'active_button' : ''}`} 
                onClick={handleSecondButton}>
                Дошколята 6-7
              </button>
            </div>
          </div>


          <p className="main__title">Что такое TatarLingo?</p>
          <div className="mainView__blockw" >
            <img className="mainView__img" src={backgroundWhat} alt="Background" />
            <div className="main_buttonsw">
              <button 
                className={`mainView_buttonw ${backgroundWhat === MainLearn ? 'active_buttonw' : ''}`} 
                onClick={handleLearnButton}>
                Учись
              </button>
              <button 
                className={`mainView_buttonw ${backgroundWhat === MainPlay ? 'active_buttonw' : ''}`} 
                onClick={handlePlayButton}>
                Играй
              </button>
            </div>
          </div>

          <p id="mainQuestions__block" className="main__title">Часто задаваемые вопросы</p>
          <Accordion />

      </section>
    </main>
  );
}
