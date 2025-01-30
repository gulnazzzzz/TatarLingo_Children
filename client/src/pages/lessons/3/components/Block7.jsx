import React, { useState, useEffect, useRef } from 'react';
import bear2 from '../../../../assets/2аю.svg';
import ат from '../../../../assets/ат.svg';
import кубэлэклэр from '../../../../assets/3кубэлэк.svg';
import кыярлар from '../../../../assets/кыярлар.svg';
import one from '../../../../audios/ике аюны тап.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../Answer';

const Block7 = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = bear2; // Устанавливаем правильный ответ

  const checkAnswer = () => {
    console.log('Selected image:', selectedImage);
    console.log('Correct answer:', correctAnswer);
    const isAnswerCorrect = selectedImage === correctAnswer;
    console.log('Is answer correct:', isAnswerCorrect);
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
    onAnswer(isAnswerCorrect);
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

  const handleBack = () => {
    onBack();
  };

  return (
    <div className='lessonBlock'>
      {!showAnswer ? (
        <>
          <div className='audio-text'>
            <audio ref={audioRef} src={one} />
            <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
            <p className='original-text lessonText'>Ике аюны тап.
              <span className="translated-text">Найди двух медведей.</span>
            </p>
          </div>
          <div className='lessonImages'>
            <div className='lessonImage fourImages' style={{ border: selectedImage === ат ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(ат)}>
              <img src={ат} alt="Лошадь" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === bear2 ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(bear2)} >
              <img src={bear2} alt="bear2" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === кубэлэклэр ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(кубэлэклэр)} >
              <img src={кубэлэклэр} alt="кубэлэклэр"/>
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === кыярлар ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(кыярлар)} >
              <img src={кыярлар} alt="Огурцы"/>
            </div>
          </div>
          <div className='lessonButtons'>
            <button onClick={handleBack} className='original-text lessonButton AnswButton'>Артка
              <span className="translated-text">Назад</span>
            </button>
            <button onClick={checkAnswer} className='original-text lessonButton AnswButton' disabled={!selectedImage}>Җавап бирергә
          <span className="translated-text">Ответить</span>
        </button>
          </div>
        </>
      ) : (
        <>
          <div className='lessonImages'>
            <div className='lessonImage' >
              <img src={bear2} style={{ border: selectedImage === bear2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="bear2"/>
            </div>
            <div className='lessonImage'>
              <img src={ball} style={{ border: selectedImage === ball ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="ball"/>
            </div>
            <div className='lessonImage' >
              <img src={ball2} style={{ border: selectedImage === ball2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="ball2"/>
            </div>
            <div className='lessonImage' >
              <img src={bear} style={{ border: selectedImage === bear ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="bear"/>
            </div>
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} onBack={handleBack} />
        </>
      )}
    </div>
  );
};

export default Block7;
