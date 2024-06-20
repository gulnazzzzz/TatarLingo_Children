import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import EventContext from '../../contexts/EventContext';
import { updateEventCategory, fetchEventCategories } from '../../http/eventAPI';

const UpdateEventCategory = observer(({ show, onHide }) => {
    const { eventCategories, selectedEventCategory, setSelectedEventCategory, loading } = useContext(EventContext);
    const [categoryName, setCategoryName] = useState('');
    const [selectedCategoryID, setSelectedCategoryID] = useState(null);

    useEffect(() => {
        if (selectedCategoryID) {
            const selectedCategory = eventCategories.find(cat => cat.eventCategoryID === selectedCategoryID);
            if (selectedCategory) {
                setCategoryName(selectedCategory.name);
                setSelectedEventCategory(selectedCategory);
            }
        }
    }, [selectedCategoryID, eventCategories, setSelectedEventCategory]);

    const editEventCategory = () => {
        if (selectedCategoryID) {
            updateEventCategory(selectedCategoryID, { name: categoryName }).then(() => {
                fetchEventCategories().then(data => {
                    setSelectedEventCategory(null);
                    setSelectedCategoryID(null);
                    setCategoryName('');
                    onHide();
                });
            });
        }
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Редактировать категорию мероприятия</h5>
                    <button  className="modalClose" type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    {loading && <p>Загрузка...</p>}
                    {!selectedCategoryID ? (
                        <div>
                            <h5>Выберите категорию для редактирования</h5>
                            <ul>
                                {eventCategories.map(cat => (
                                    <li  className='lessonAgeLi' key={cat.eventCategoryID} onClick={() => setSelectedCategoryID(cat.eventCategoryID)}>
                                        {cat.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={categoryName}
                                onChange={e => setCategoryName(e.target.value)}
                                placeholder="Введите название категории"
                            />
                        </>
                    )}
                </div>
                <div className="modal-footer">
                    <button  className="modalClose" onClick={onHide}>Закрыть</button>
                    {selectedCategoryID && <button onClick={editEventCategory}>Сохранить изменения</button>}
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default UpdateEventCategory;
