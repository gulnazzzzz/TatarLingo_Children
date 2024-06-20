import React, { useState, useEffect, useRef } from 'react';
import n1 from '../../../../assets/1.svg';
import n2 from '../../../../assets/2.svg';
import one from '../../../../audios/бер.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../../lessons/Answer';

const SecondBlock = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const audioRef = useRef(null);

  const checkAnswer = () => {
    const correctAnswer = n1; // Устанавливаем правильный ответ
    const isCorrect = selectedImage === correctAnswer;
    setIsCorrect(isCorrect);
    setShowAnswer(true);
    onAnswer(isCorrect);
    setIsAnswered(true);
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
      {!showAnswer ? (
        <>
          <div className='audio-text'>
            <audio ref={audioRef} src={one} />
            <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
            <p className='lessonText'>Бер санын тап.</p>
          </div>
          <div className='lessonImages'>
            <div onClick={() => setSelectedImage(n1)} className='lessonImage' style={{ border: selectedImage === n1 ? '1px solid #656565' : '1px solid #C8C8C8' }}>
              <img src={n1}  />
            </div>
            <div onClick={() => setSelectedImage(n2)} className='lessonImage' style={{ border: selectedImage === n2 ? '1px solid #800000' : '1px solid #C8C8C8' }}>
              <img src={n2} />
            </div>
          </div>
          <div className='lessonButtons'>
            <button onClick={onBack} className='lessonButton'>Назад</button>
            <button onClick={checkAnswer} className='lessonButton'>Ответить</button>
          </div>
        </>
      ) : (
        <>
          <div className='lessonImages'>
            <div className='lessonImage' onClick={() => checkAnswer(true)} style={{ border: selectedImage === n1 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}>
              <img src={n1}/>
            </div>
            <div className='lessonImage' onClick={() => checkAnswer(false)}  style={{ border: selectedImage === n2 ? (!isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}>
              <img src={n2}/>
            </div>
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} />
        </>
      )}
    </div>
  );
};

export default SecondBlock;
