import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createEvent, fetchEventCategories, fetchEvents } from '../../http/eventAPI';

const CreateEvent = observer(({ show, onHide }) => {
    const { event } = useContext(Context);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateAndTime, setDateAndTime] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        fetchEventCategories().then(data => event.setEventCategories(data));
    }, [event]);
    
    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addLesson = () => {
        const formData = new FormData();
        formData.append('img', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('dateAndTime', dateAndTime);
        formData.append('location', location);
        formData.append('link', link);
        formData.append('eventCategoryEventCategoryID', event.selectedEventCategory.eventCategoryID);
        createEvent(formData).then(data => onHide());
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Добавить мероприятие</h5>
                    <button type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <div className="dropdown">
                        <button className="dropdown-toggle">{event.selectedEventCategory.name || "Выберите категорию"}</button>
                        <div className="dropdown-menu">
                            {event.eventCategories.map(eventCategory => (
                                <div key={eventCategory.eventCategoryID} onClick={() => event.setSelectedEventCategory(eventCategory)}>
                                    {eventCategory.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input
                        type="file"
                        onChange={selectFile}
                    />
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название мероприятия"
                    />
                    <textarea
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Введите описание мероприятия"
                    />
                    <input
                        type="text"
                        value={dateAndTime}
                        onChange={e => setDateAndTime(e.target.value)}
                        placeholder="Введите дату и время"
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Введите место"
                    />
                    <input
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        placeholder="Вставьте ссылку на мероприятие"
                    />
                </div>
                <div className="modal-footer">
                    <button onClick={onHide}>Закрыть</button>
                    <button onClick={addLesson}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default CreateEvent;