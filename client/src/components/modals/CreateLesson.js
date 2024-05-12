import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createLesson, fetchAges, fetchCategories } from '../../http/lessonAPI';

const CreateLesson = observer(({ show, onHide }) => {
    const { lesson } = useContext(Context);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    // useEffect(() => {
    //     fetchAges().then(data => lesson.setAges(data));
    //     fetchCategories().then(data => lesson.setCategories(data));
    // }, [lesson]);

    // const addInfo = () => {
    //     setInfo([...info, { title: '', description: '', number: Date.now() }]);
    // };

    // const removeInfo = number => {
    //     setInfo(info.filter(i => i.number !== number));
    // };

    // const changeInfo = (key, value, number) => {
    //     setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    // };

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addLesson = () => {
        const formData = new FormData();
        formData.append('title', title);
        // formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('lessonAgeLessonAgeID', lesson.selectedAge.lessonAgeID);
        formData.append('lessonCategoryLessonCategoryID', lesson.selectedCategory.lessonCategoryID);
        // formData.append('info', JSON.stringify(info));
        createLesson(formData).then(data => onHide());
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Добавить урок</h5>
                    <button type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <div className="dropdown">
                        <button className="dropdown-toggle">{lesson.selectedAge.name || "Выберите возраст"}</button>
                        <div className="dropdown-menu">
                            {lesson.lessonAges.map(lessonAge => (
                                <div key={lessonAge.lessonAgeID} onClick={() => lesson.setSelectedAge(lessonAge)}>
                                    {lessonAge.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-toggle">{lesson.selectedCategory.name || "Выберите категорию"}</button>
                        <div className="dropdown-menu">
                            {lesson.lessonCategories.map(lessonCategory => (
                                <div key={lessonCategory.lessonCategoryID} onClick={() => lesson.setSelectedCategory(lessonCategory)}>
                                    {lessonCategory.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название урока"
                    />
                    
                    <input
                        type="file"
                        onChange={selectFile}
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

export default CreateLesson;