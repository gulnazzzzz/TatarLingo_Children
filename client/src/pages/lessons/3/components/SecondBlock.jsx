import React, { useState } from 'react';

const SecondBlock = ({ onAnswer, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const checkAnswer = (correct) => {
    onAnswer(correct);
    onNext();
  };

  return (
    <div>
      <p onMouseOver={e => e.target.textContent = "Новый текст"}>Исходный текст</p>
      <img src="image1.jpg" onClick={() => checkAnswer(true)} style={{backgroundColor: selectedImage === "image1" ? 'green' : 'initial'}} />
      <img src="image2.jpg" onClick={() => checkAnswer(false)} style={{backgroundColor: selectedImage === "image2" ? 'green' : 'initial'}} />
      <button onClick={onNext}>Дальше</button>
    </div>
  );
};

export default SecondBlock