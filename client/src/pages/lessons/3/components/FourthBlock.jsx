import React, { useState, useEffect, useRef } from 'react';
import bear2 from '../../../../assets/2аю.svg';
import ball from '../../../../assets/1туп.svg';
import ball2 from '../../../../assets/2туп.svg';
import bear from '../../../../assets/аю.svg';
import one from '../../../../audios/бер.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../../lessons/Answer';

const FourthBlock = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = (correct) => {
    setIsCorrect(correct);
    setShowAnswer(true);
    onAnswer(correct);
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
            <p className='lessonText'>Бер аюны тап.</p>
          </div>
          <div className='lessonImages'>
            <div className='lessonImage fourImages' style={{ border: selectedImage === bear2 ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(bear2)} >
              <img src={bear2} />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === ball ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(ball)}>
              <img src={ball} />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === ball2 ? '1px solid #656565' : '1px solid #C8C8C8' }}  onClick={() => setSelectedImage(ball2)} >
              <img src={ball2}/>
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === bear ? '1px solid #656565' : '1px solid #C8C8C8' }}  onClick={() => setSelectedImage(bear)} >
              <img src={bear}/>
            </div>
          </div>
          <div className='lessonButtons'>
            <button onClick={onBack} className='lessonButton'>Назад</button>
            <button onClick={() => checkAnswer(selectedImage === bear)} className='lessonButton'>Ответить</button>
          </div>
        </>
      ) : (
        <>
          <div className='lessonImages'>
            <div className='lessonImage' >
              <img src={bear2} style={{ border: selectedImage === bear2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}/>
            </div>
            <div className='lessonImage'>
              <img src={ball}  style={{ border: selectedImage
              === ball ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}/>
            </div>
            <div className='lessonImage' >
              <img src={ball2} style={{ border: selectedImage === ball2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}/>
            </div>
            <div className='lessonImage' >
              <img src={bear} style={{ border: selectedImage === bear ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }}/>
            </div>
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} />
        </>
      )}
    </div>
  );
};

export default FourthBlock;
