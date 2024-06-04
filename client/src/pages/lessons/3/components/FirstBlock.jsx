import React, { useState } from 'react';

const FirstBlock = ({ onNext }) => (
  <div>
    <p onMouseOver={e => e.target.textContent = "Новый текст"}>Исходный текст</p>
    <button onClick={onNext}>Дальше</button>
  </div>
);

export default FirstBlock