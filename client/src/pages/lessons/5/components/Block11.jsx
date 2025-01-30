import React, { useState, useEffect, useRef } from 'react';
import ат from '../../../../assets/ат.svg';
import тавык from '../../../../assets/кечкенэ тавык.svg';
import сыер from '../../../../assets/кечкенэ  сыер.svg';
import one from '../../../../audios/рэсемдэ кемне курэсен.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../Answer';

const Block11 = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = сыер;

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
            <p className='original-text lessonText'>Рәсемдә кемне күрәсен?
              <span className="translated-text">Кого ты видишь на картинке?</span>
            </p>
          </div>
          <div className='centeredImageAns'>
            <img width={120} height={120} src={сыер} alt="Цифра 2"/>
          </div>
          <div className='lessonImages'>
            <div className='lessonImage textImages' style={{ border: selectedImage === тавык ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(тавык)} >
              <p src={тавык}>Тавык</p>
            </div>
            <div className='lessonImage textImages' style={{ border: selectedImage === ат ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(ат)} >
              <p src={ат}>Ат</p>
            </div>
            <div className='lessonImage textImages' style={{ border: selectedImage === сыер ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(сыер)} >
              <p src={сыер}>Сыер</p>
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
            {/* <div className='lessonImage' >
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
            </div> */}
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} onBack={handleBack} />
        </>
      )}
    </div>
  );
};

export default Block11;
