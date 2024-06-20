import React, {useState} from 'react';
import {createEventCategory} from "../../http/eventAPI";
import '../../index.css';

const СreateEventCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addEventCategory = () => {
        createEventCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Добавить категорию мероприятия</h5>
                    <button type="button" className="modalClose" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите категорию мероприятия"
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="modalClose" onClick={onHide}>Закрыть</button>
                    <button type="button" className="modalClick" onClick={addEventCategory}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
};

export default СreateEventCategory;