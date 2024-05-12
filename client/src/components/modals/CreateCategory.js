import React, {useState} from 'react';
import {createCategory} from "../../http/lessonAPI";
import '../../index.css';

const СreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Добавить категорию урока</h5>
                    <button type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите категорию"
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={onHide}>Закрыть</button>
                    <button type="button" onClick={addCategory}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
};

export default СreateCategory;