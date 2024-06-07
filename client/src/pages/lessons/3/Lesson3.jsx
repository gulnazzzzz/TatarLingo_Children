import React, { useState } from 'react';
import '../../../index.css';
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock';
import FourthBlock from './components/FourthBlock';
import Answer from '../../lessons/Answer';
import Modal from 'react-modal';
import correct from '../../../assets/true.svg';
import wrong from '../../../assets/false.svg';

Modal.setAppElement('#root');

const Lesson3 = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false); // Новое состояние для модального окна
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    setCurrentBlock(prevBlock => prevBlock + 1);
  };

  const handleBack = () => {
    if (currentBlock > 0) {
      setCurrentBlock(prevBlock => prevBlock - 1);
    }
  };

  const handleAnswer = (isCorrect) => {
    setAnswers(prevAnswers => [...prevAnswers, isCorrect]);
    if (isCorrect) {
      setCorrectAnswers(prevCount => prevCount + 1);
    } else {
      setWrongAnswers(prevCount => prevCount + 1);
    }
    setCurrentBlock(prevBlock => prevBlock + 1);
    if (currentBlock === 5) {
      setShowModal(true); // Открываем модальное окно после последнего блока Answer
    }
  };

  const renderBlock = () => {
    switch (currentBlock) {
      case 0:
        return <FirstBlock onNext={handleNext} />;
      case 1:
        return <SecondBlock onAnswer={handleAnswer} onBack={handleBack} onNext={handleNext} />;
      case 2:
        return <Answer isCorrect={answers[1]} onBack={handleBack} onNext={handleNext} />;
      case 3:
        return <ThirdBlock onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <FourthBlock onAnswer={handleAnswer} onBack={handleBack} onNext={handleNext} />;
      case 5:
        return <Answer isCorrect={answers[4]} onBack={handleBack} onNext={handleNext} />;
      case 6:
        return <div>Конец урока!</div>;
      default:
        setShowModal(true);
        return null;
    }
  };

  return (
    <div className="centeredContainer">
      <div className="correct-wrongAnswers">
        <div className="correct-wrongAnswerBlock">
          <div>{correctAnswers}</div>
          <div><img src={correct} className='correctWrongImg' /></div>
        </div>
        <div className="correct-wrongAnswerBlock">
          <div>{wrongAnswers}</div>
          <div><img src={wrong} className='correctWrongImg' /></div>
        </div>
      </div>
      {renderBlock()}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Результаты"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Результаты</h2>
        <p>Правильные ответы: {correctAnswers}</p>
        <p>Неправильные ответы: {wrongAnswers}</p>
        <button onClick={() => setShowModal(false)}>Закрыть</button>
      </Modal>
    </div>
  );
};

export default Lesson3;
