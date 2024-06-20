import React, { useState, useEffect, useRef } from 'react';
import '../../../index.css';
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock';
import FourthBlock from './components/FourthBlock';
import Answer from '../../lessons/Answer';
import correct from '../../../assets/true.svg';
import wrong from '../../../assets/false.svg';
import one from '../../../audios/бер.mp3';
import audio from '../../../assets/audio.svg';

const Lesson3 = () => {
  const audioRef = useRef(null);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false); // Добавляем состояние для показа блока Answer

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

  const handleNext = () => {
    setCurrentBlock(prevBlock => prevBlock + 1);
    setShowAnswer(false); // Скрыть блок Answer при переходе к следующему блоку
  };

  const handleBack = () => {
    if (currentBlock > 0) {
      setCurrentBlock(prevBlock => prevBlock - 1);
      setShowAnswer(false); // Скрыть блок Answer при возврате к предыдущему блоку
    }
  };

  const handleAnswer = (isCorrect) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [currentBlock]: isCorrect }));
    if (isCorrect) {
      setCorrectAnswers(prevCount => prevCount + 1);
    } else {
      setWrongAnswers(prevCount => prevCount + 1);
    }
    setShowAnswer(true); // Показать блок Answer после ответа
    setCurrentBlock(prevBlock => prevBlock + 1);
  };

  const renderBlock = () => {
    switch (currentBlock) {
      case 0:
        return <FirstBlock onNext={handleNext} />;
      case 1:
        return <SecondBlock onAnswer={handleAnswer} onBack={handleBack} onNext={handleNext} />;
      case 2:
        return <Answer isCorrect={answers[1]} onBack={handleBack} onNext={handleNext} setShowAnswer={setShowAnswer} />;
      case 3:
        return <ThirdBlock onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <FourthBlock onAnswer={handleAnswer} onBack={handleBack} onNext={handleNext} /* setShowAnswer={setShowAnswer} isCorrect={answers[4]} */ />;
      case 5:
        return <Answer isCorrect={answers[4]} onBack={handleBack} onNext={handleNext} setShowAnswer={setShowAnswer} />;
      case 6:
        return (
          <div className='lessonEnd'>
            <div className='endText'>
              <div className='audio-text'>
                <audio ref={audioRef} src={one} />
                <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
                <p className='lessonText'>Урок завершен!</p>
              </div>
              <p>Молодец! Продолжай в том же духе, ты на правильном пути!</p>
            </div>
            <div className='endText'>
              <div className='audio-text'>
                <audio ref={audioRef} src={one} />
                <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
                <p className='lessonText'>Дәрес тәмам!</p>
              </div>
              <p>Афәрин! Шушы рухта дәвам ит, син дөрес юлда!</p>
            </div>
            <div className='lessonEndButtons'>
              <button className='lessonEndButton getAward'>Мои награды</button>
              <button className='lessonEndButton newLesson'>Следующий урок</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="centeredContainer">
      <div className="correct-wrongAnswers">
        <div className="correct-wrongAnswerBlock">
          <div>{correctAnswers}</div>
          <div><img src={correct} className='correctWrongImg' alt="Correct answers" /></div>
        </div>
        <div className="correct-wrongAnswerBlock">
          <div>{wrongAnswers}</div>
          <div><img src={wrong} className='correctWrongImg' alt="Wrong answers" /></div>
        </div>
      </div>
      {renderBlock()}
      {showAnswer && <Answer isCorrect={answers[currentBlock - 1]} onBack={handleBack} onNext={handleNext} setShowAnswer={setShowAnswer} />}
    </div>
  );
};

export default Lesson3;
