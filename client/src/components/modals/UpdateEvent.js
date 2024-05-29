import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import EventContext from '../../contexts/EventContext';
import { updateEvent, fetchOneEvent } from '../../http/eventAPI';

const UpdateEvent = observer(({ show, onHide }) => {
    const { events, eventCategories, selectedEventCategory, setSelectedEventCategory, loading } = useContext(EventContext);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateAndTime, setDateAndTime] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [selectedEventID, setSelectedEventID] = useState(null);

    useEffect(() => {
        if (selectedEventID) {
            fetchOneEvent(selectedEventID).then(eventData => {
                setTitle(eventData.title);
                setDescription(eventData.description);
                setDateAndTime(eventData.dateAndTime);
                setLocation(eventData.location);
                setLink(eventData.link);
                setSelectedEventCategory(eventData.eventCategory);
            });
        }
    }, [selectedEventID, setSelectedEventCategory]);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const editEvent = () => {
        const formData = new FormData();
        if (file) {
            formData.append('img', file);
        }
        formData.append('title', title);
        formData.append('description', description);
        formData.append('dateAndTime', dateAndTime);
        formData.append('location', location);
        formData.append('link', link);
        formData.append('eventCategoryEventCategoryID', selectedEventCategory ? selectedEventCategory.eventCategoryID : '');
        updateEvent(selectedEventID, formData).then(data => onHide());
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Редактировать мероприятие</h5>
                    <button type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    {loading && <p>Загрузка...</p>}
                    {!selectedEventID ? (
                        <div>
                            <h5>Выберите мероприятие для редактирования</h5>
                            <ul>
                                {events.map(ev => (
                                    <li key={ev.eventID} onClick={() => setSelectedEventID(ev.eventID)}>
                                        {ev.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <>
                            <div className="dropdown">
                                <button className="dropdown-toggle">{selectedEventCategory ? selectedEventCategory.name : "Выберите категорию"}</button>
                                <div className="dropdown-menu">
                                    {eventCategories.map(eventCategory => (
                                        <div key={eventCategory.eventCategoryID} onClick={() => setSelectedEventCategory(eventCategory)}>
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
                            <input
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
                        </>
                    )}
                </div>
                <div className="modal-footer">
                    <button onClick={onHide}>Закрыть</button>
                    {selectedEventID && <button onClick={editEvent}>Сохранить изменения</button>}
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default UpdateEvent;
