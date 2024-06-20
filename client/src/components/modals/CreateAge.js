import React, {useState} from 'react';
import {createAge} from "../../http/lessonAPI";
import '../../index.css';

const CreateAge = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addAge = () => {
        createAge({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Добавить возраст</h5>
                    <button type="button"  className="modalClose" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите возраст"
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="modalClose" onClick={onHide}>Закрыть</button>
                    <button type="button" className="modalClick" onClick={addAge}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
};

export default CreateAge;