import React, { useState, useEffect, useRef } from 'react';
import n1 from '../../../../assets/1.svg';
import n2 from '../../../../assets/2.svg';
import one from '../../../../audios/бер санын тап.mp3';
import audio from '../../../../assets/audio.svg';

const Block2 = ({ onAnswer, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const audioRef = useRef(null);

  const checkAnswer = () => {
    const correctAnswer = n1; // Устанавливаем правильный ответ
    const isCorrect = selectedImage === correctAnswer;
    setIsCorrect(isCorrect);
    onAnswer(isCorrect);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAudioClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className='lessonBlock'>
      <div className='audio-text'>
        <audio ref={audioRef} src={one} />
        <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
        <p className='original-text lessonText'>Бер санын тап.
          <span className="translated-text">Найди цифру один.</span>
        </p>
      </div>
      <div className='lessonImages'>
        <div onClick={() => setSelectedImage(n1)} className='lessonImage' style={{ border: selectedImage === n1 ? '1px solid #656565' : '1px solid #C8C8C8' }}>
          <img src={n1} />
        </div>
        <div onClick={() => setSelectedImage(n2)} className='lessonImage' style={{ border: selectedImage === n2 ? '1px solid #800000' : '1px solid #C8C8C8' }}>
          <img src={n2} />
        </div>
      </div>
      <div className='lessonButtons'>
        <button onClick={onBack} className='original-text lessonButton AnswButton'>Артка
          <span className="translated-text">Назад</span>
        </button>
        <button 
          onClick={checkAnswer} 
          className='original-text lessonButton AnswButton'
          disabled={!selectedImage}
        >
          Җавап бирергә
          <span className="translated-text">Ответить</span>
        </button>
      </div>
    </div>
  );
};

export default Block2;
