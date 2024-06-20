import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import '../index.css';
import гаилэ from '../assets/гаилэ.svg';
import эт from '../assets/эт.svg';
import песи from '../assets/песи.svg';
import кубэлэк from '../assets/кубэлэк.svg';
import алма from '../assets/алма.svg';
import малай from '../assets/малай.svg';
import one from '../audios/бер.mp3';

Modal.setAppElement('#root');

export default function Games() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentGame, setCurrentGame] = useState('matching1');
    const [resultModalIsOpen, setResultModalIsOpen] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const openModal = () => {
        setCurrentGame('matching1');
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentGame('matching1');
    };

    const openResultModal = (correct) => {
        setIsCorrect(correct);
        setResultModalIsOpen(true);
    };

    const closeResultModal = () => {
        setResultModalIsOpen(false);
    };

    const nextGame = () => {
        if (currentGame === 'matching1') {
            setCurrentGame('matching2');
            setResultModalIsOpen(false);
        } else {
            closeModal();
        }
    };

    const renderGameContent = () => {
    switch (currentGame) {
        case 'matching1':
            return <MatchingGame openResultModal={openResultModal} nextGame={nextGame} />;
        case 'matching2':
            return <MatchingGame2 openResultModal={openResultModal} nextGame={nextGame} />;
        default:
            return null;
    }
};

    return (
        <div className="many-container">
            <div className="radius-container">
                <div className='radius-container-content'>
                    <p className='page-title'>Әйдә уйныйбыз!</p>
                    <div>
                        <div className="cards main-content">
                            <button onClick={openModal}>Собери пару</button>
                            <button onClick={() => alert('Данная игра еще не реализована')}>Угадай слово</button>
                            <button onClick={() => alert('Данная игра еще не реализована')}>Викторина</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Game Modal"
                className="game-modal"
                overlayClassName="game-modal-overlay"
            >
                <button onClick={closeModal}>Закрыть</button>
                {renderGameContent()}
            </Modal>

            <Modal
                isOpen={resultModalIsOpen}
                onRequestClose={closeResultModal}
                contentLabel="Result Modal"
                className="result-modal"
                overlayClassName="result-modal-overlay"
            >
                <button onClick={closeResultModal}>Закрыть</button>
                <p>{isCorrect ? 'Верно!' : 'Неверно!'}</p>
                
            </Modal>
        </div>
    );
}

function MatchingGame({ openResultModal, nextGame }) {
    const items = [
        { id: 1, word: "Малай", image: малай, audio: one, borderColor: 'yellow' },
        { id: 2, word: "Песи", image: песи, audio: one, borderColor: 'orange' },
        { id: 3, word: "Эт", image: эт, audio: one, borderColor: 'red' }
    ];

    const [selectedWord, setSelectedWord] = useState(null);
    const [connections, setConnections] = useState([]);
    const [lines, setLines] = useState([]);
    const [textBackgroundColors, setTextBackgroundColors] = useState(items.map(item => ''));
    const [imageBorderColors, setImageBorderColors] = useState(items.map(item => ''));

    const wordRefs = useRef({});
    const imageRefs = useRef({});

    useEffect(() => {
        items.forEach(item => {
            wordRefs.current[item.id] = React.createRef();
            imageRefs.current[item.id] = React.createRef();
        });
    }, []);

    const handleWordClick = (item, index) => {
        const audio = new Audio(item.audio);
        audio.play().catch(error => console.log(error));
        setSelectedWord(item);
        const newBackgroundColors = [...textBackgroundColors];
        newBackgroundColors[index] = item.borderColor;
        setTextBackgroundColors(newBackgroundColors);
    };

    const handleImageClick = (item, index) => {
        if (selectedWord) {
            const newConnections = [...connections, { wordId: selectedWord.id, imageId: item.id }];
            setConnections(newConnections);

            const newImageBorderColors = [...imageBorderColors];
            newImageBorderColors[index] = textBackgroundColors.find(color => color !== '') || item.borderColor;
            setImageBorderColors(newImageBorderColors);

            setSelectedWord(null);
        }
    };

    const handleReset = () => {
        setConnections([]);
        setSelectedWord(null);
        setLines([]);
        setTextBackgroundColors(items.map(item => ''));
        setImageBorderColors(items.map(item => ''));
    };

    const handleCheck = () => {
        const correct = connections.length === items.length && connections.every(conn => conn.wordId === conn.imageId);
        openResultModal(correct);
    };

    useEffect(() => {
        const newLines = connections.map(conn => {
            const wordRect = wordRefs.current[conn.wordId].current.getBoundingClientRect();
            const imageRect = imageRefs.current[conn.imageId].current.getBoundingClientRect();
            return {
                x1: wordRect.right,
                y1: wordRect.top + wordRect.height / 2,
                x2: imageRect.left,
                y2: imageRect.top + imageRect.height / 2
            };
        });
        setLines(newLines);
    }, [connections]);

    return (
        <div>
            <div className="matching-game">
                <div className="words">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            ref={wordRefs.current[item.id]}
                            onClick={() => handleWordClick(item, index)}
                            disabled={connections.some(conn => conn.wordId === item.id)}
                            data-id={item.id}
                            style={{ backgroundColor: textBackgroundColors[index] }}
                            className="wordGame"
                        >
                            {item.word}
                            <audio src={item.audio} />
                        </button>
                    ))}
                </div>
                <div className="images">
                    {items.map((item, index) => (
                        <img
                            key={item.id}
                            ref={imageRefs.current[item.id]}
                            src={item.image}
                            alt={item.word}
                            onClick={() => handleImageClick(item, index)}
                            className={`imgGame ${connections.some(conn => conn.imageId === item.id) ? 'matched' : ''}`}
                            data-id={item.id}
                            style={{ borderColor: imageBorderColors[index] }}
                        />
                    ))}
                </div>
                <svg className="connections">
                    {lines.map((line, index) => (
                        <line
                            key={index}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="black"
                        />
                    ))}
                </svg>
            </div>
            <div className="controls">
                <button className='gameButton gameCheckButton' onClick={handleCheck}>Проверить</button>
                <button className='gameButton' onClick={handleReset}>Попробовать снова</button>
                <button className='gameButton' onClick={nextGame}>Следующее задание</button>
            </div>
        </div>
    );
}

function MatchingGame2({ openResultModal, nextGame }) {
    const items = [
        { id: 1, word: "Гаилэ", image: гаилэ, audio: one, borderColor: 'pink' },
        { id: 2, word: "Кубэлэк", image: кубэлэк, audio: one, borderColor: 'red' },
        { id: 3, word: "Алма", image: алма, audio: one, borderColor: 'green' }
    ];

    const [selectedWord, setSelectedWord] = useState(null);
    const [connections, setConnections] = useState([]);
    const [lines, setLines] = useState([]);
    const [textBackgroundColors, setTextBackgroundColors] = useState(items.map(item => ''));
    const [imageBorderColors, setImageBorderColors] = useState(items.map(item => ''));

    const wordRefs = useRef({});
    const imageRefs = useRef({});

    useEffect(() => {
        items.forEach(item => {
            wordRefs.current[item.id] = React.createRef();
            imageRefs.current[item.id] = React.createRef();
        });
    }, []);

    const handleWordClick = (item, index) => {
        const audio = new Audio(item.audio);
        audio.play().catch(error => console.log(error));
        setSelectedWord(item);
        const newBackgroundColors = [...textBackgroundColors];
        newBackgroundColors[index] = item.borderColor;
        setTextBackgroundColors(newBackgroundColors);
    };

    const handleImageClick = (item, index) => {
        if (selectedWord) {
            const newConnections = [...connections, { wordId: selectedWord.id, imageId: item.id }];
            setConnections(newConnections);

            const newImageBorderColors = [...imageBorderColors];
            newImageBorderColors[index] = textBackgroundColors.find(color => color !== '') || item.borderColor;
            setImageBorderColors(newImageBorderColors);

            setSelectedWord(null);
        }
    };

    const handleReset = () => {
        setConnections([]);
        setSelectedWord(null);
        setLines([]);
        setTextBackgroundColors(items.map(item => ''));
        setImageBorderColors(items.map(item => ''));
    };

    const handleCheck = () => {
        const correct = connections.length === items.length && connections.every(conn => conn.wordId === conn.imageId);
        openResultModal(correct);
    };

    useEffect(() => {
        const newLines = connections.map(conn => {
            const wordRect = wordRefs.current[conn.wordId].current.getBoundingClientRect();
            const imageRect = imageRefs.current[conn.imageId].current.getBoundingClientRect();
            return {
                x1: wordRect.right,
                y1: wordRect.top + wordRect.height / 2,
                x2: imageRect.left,
                y2: imageRect.top + imageRect.height / 2
            };
        });
        setLines(newLines);
    }, [connections]);

    return (
        <div>
            <div className="matching-game">
                <div className="words">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            ref={wordRefs.current[item.id]}
                            onClick={() => handleWordClick(item, index)}
                            disabled={connections.some(conn => conn.wordId === item.id)}
                            data-id={item.id}
                            style={{ backgroundColor: textBackgroundColors[index] }}
                            className="wordGame"
                        >
                            {item.word}
                            <audio src={item.audio} />
                        </button>
                    ))}
                </div>
                <div className="images">
                    {items.map((item, index) => (
                        <img
                            key={item.id}
                            ref={imageRefs.current[item.id]}
                            src={item.image}
                            alt={item.word}
                            onClick={() => handleImageClick(item, index)}
                            className={`imgGame ${connections.some(conn => conn.imageId === item.id) ? 'matched' : ''}`}
                            data-id={item.id}
                            style={{ borderColor: imageBorderColors[index] }}
                        />
                    ))}
                </div>
                <svg className="connections">
                    {lines.map((line, index) => (
                        <line
                            key={index}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="black"
                        />
                    ))}
                </svg>
            </div>
            <div className="controls">
                <button className='gameButton gameCheckButton' onClick={handleCheck}>Проверить</button>
                <button className='gameButton' onClick={handleReset}>Попробовать снова</button>
                <button className='gameButton' onClick={nextGame}>Следующее задание</button>
            </div>
        </div>
    );
}
