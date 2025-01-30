import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { deleteLesson, fetchLessons } from '../../http/lessonAPI';

const DeleteLesson = observer(({ show, onHide }) => {
    const { lesson } = useContext(Context);
    const [selectedLessonID, setSelectedLessonID] = useState('');

    useEffect(() => {
        fetchLessons().then(data => lesson.setLessons(data));
    }, [lesson]);

    const handleDelete = async () => {
        if (!selectedLessonID) {
            return;
        }

        try {
            await deleteLesson(selectedLessonID);
            const updatedLessons = await fetchLessons();
            lesson.setLessons(updatedLessons);
            setSelectedLessonID('');
            onHide();
        } catch (error) {
            console.error('Error deleting lesson:', error);
        }
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Удалить урок</h5>
                    <button type="button"  className="modalClose" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <select value={selectedLessonID} onChange={e => setSelectedLessonID(e.target.value)}>
                        <option value="">Выберите урок для удаления</option>
                        {lesson.filteredLessons?.map(les => (
                            <option key={les.lessonID} value={les.lessonID}>
                                {les.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="modal-footer">
                    <button  className="modalClose" onClick={onHide}>Закрыть</button>
                    <button  className="modalClick" onClick={handleDelete} disabled={!selectedLessonID}>Удалить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default DeleteLesson;
