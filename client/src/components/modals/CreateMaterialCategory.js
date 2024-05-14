import React, {useState} from 'react';
import {createMaterialCategory} from "../../http/materialAPI";
import '../../index.css';

const СreateMaterialCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addMaterialCategory = () => {
        createMaterialCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Добавить категорию обучающего материала</h5>
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
                    <button type="button" onClick={addMaterialCategory}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
};

export default СreateMaterialCategory;