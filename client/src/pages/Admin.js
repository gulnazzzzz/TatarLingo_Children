import React, { useState } from 'react';
import CreateAge from "../components/modals/CreateAge";
import CreateCategory from "../components/modals/CreateCategory";
import CreateLesson from "../components/modals/CreateLesson";
import CreateMaterialCategory from "../components/modals/CreateMaterialCategory";
import CreateMaterial from "../components/modals/CreateMaterial";
import CreateEventCategory from "../components/modals/CreateEventCategory";
import CreateEvent from "../components/modals/CreateEvent";

import UpdateEvent from "../components/modals/UpdateEvent";
import UpdateMaterial from "../components/modals/UpdateMaterial";
import UpdateAge from "../components/modals/UpdateAge";
import UpdateCategory from "../components/modals/UpdateCategory";
import UpdateEventCategory from "../components/modals/UpdateEventCategory";
import UpdateMaterialCategory from "../components/modals/UpdateMaterialCategory";

import DeleteMaterial from "../components/modals/DeleteMaterial";
import DeleteEvent from "../components/modals/DeleteEvent";
import DeleteLesson from "../components/modals/DeleteLesson";
import '../index.css';

const Admin = () => {
    const [lessonAgeVisible, setLessonAgeVisible] = useState(false);
    const [lessonCategoryVisible, setLessonCategoryVisible] = useState(false);
    const [lessonVisible, setLessonVisible] = useState(false);
    const [materialCategoryVisible, setMaterialCategoryVisible] = useState(false);
    const [materialVisible, setMaterialVisible] = useState(false);
    const [eventCategoryVisible, setEventCategoryVisible] = useState(false);
    const [eventVisible, setEventVisible] = useState(false);

    const [eventVisibleUpdate, setEventVisibleUpdate] = useState(false);
    const [materialVisibleUpdate, setMaterialVisibleUpdate] = useState(false);
    const [eventCategoryVisibleUpdate, setEventCategoryVisibleUpdate] = useState(false);
    const [materialCategoryVisibleUpdate, setMaterialCategoryVisibleUpdate] = useState(false);
    const [ageVisibleUpdate, setAgeVisibleUpdate] = useState(false);
    const [categoryVisibleUpdate, setCategoryVisibleUpdate] = useState(false);

    const [materialVisibleDelete, setMaterialVisibleDelete] = useState(false);
    const [eventVisibleDelete, setEventVisibleDelete] = useState(false);
    const [lessonVisibleDelete, setLessonVisibleDelete] = useState(false);

    return (
        <div className="many-container">
            <div className="radius-container">
                <div className='radius-container-content'>
                    <p className='page-title'>Управление контентом</p>
                    <div className="adminButtons">
                        <div>
                            <button className="adminButton" onClick={() => setLessonAgeVisible(true)}>Добавить возраст</button>
                        <button className="adminButton" onClick={() => setLessonCategoryVisible(true)}>Добавить категорию урока</button>
                        <button className="adminButton" onClick={() => setLessonVisible(true)}>Добавить урок</button>
                        <button className="adminButton" onClick={() => setMaterialCategoryVisible(true)}>Добавить категорию материалов</button>
                        <button className="adminButton" onClick={() => setMaterialVisible(true)}>Добавить материал</button>
                        <button className="adminButton" onClick={() => setEventCategoryVisible(true)}>Добавить категорию мероприятия</button>
                        <button className="adminButton" onClick={() => setEventVisible(true)}>Добавить мероприятие</button>
                        </div>
                        <div>
                            <button className="adminButton" onClick={() => setCategoryVisibleUpdate(true)}>Редактировать категорию урока</button>
                            <button className="adminButton" onClick={() => setAgeVisibleUpdate(true)}>Редактировать возраст</button>
                            <button className="adminButton" onClick={() => setMaterialCategoryVisibleUpdate(true)}>Редактировать категорию материалов</button>
                            <button className="adminButton" onClick={() => setMaterialVisibleUpdate(true)}>Редактировать материал</button>
                            <button className="adminButton" onClick={() => setEventCategoryVisibleUpdate(true)}>Редактировать категорию мероприятий</button>
                            <button className="adminButton" onClick={() => setEventVisibleUpdate(true)}>Редактировать мероприятие</button>
                            
                        </div>
                        <div>
                            <button className="adminButton" onClick={() => setMaterialVisibleDelete(true)}>Удалить материал</button>
                            <button className="adminButton" onClick={() => setEventVisibleDelete(true)}>Удалить мероприятие</button>
                            <button className="adminButton" onClick={() => setLessonVisibleDelete(true)}>Удалить урок</button>
                        </div>
                        

                        <CreateAge show={lessonAgeVisible} onHide={() => setLessonAgeVisible(false)} />
                        <CreateCategory show={lessonCategoryVisible} onHide={() => setLessonCategoryVisible(false)} />
                        <CreateLesson show={lessonVisible} onHide={() => setLessonVisible(false)} />
                        <CreateMaterialCategory show={materialCategoryVisible} onHide={() => setMaterialCategoryVisible(false)} />
                        <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)} />
                        <CreateEventCategory show={eventCategoryVisible} onHide={() => setEventCategoryVisible(false)} />
                        <CreateEvent show={eventVisible} onHide={() => setEventVisible(false)} />


                        <UpdateEvent show={eventVisibleUpdate} onHide={() => setEventVisibleUpdate(false)} />
                        <UpdateMaterial show={materialVisibleUpdate} onHide={() => setMaterialVisibleUpdate(false)} />
                        <UpdateEventCategory show={eventCategoryVisibleUpdate} onHide={() => setEventCategoryVisibleUpdate(false)} />
                        <UpdateMaterialCategory show={materialCategoryVisibleUpdate} onHide={() => setMaterialCategoryVisibleUpdate(false)} />
                        <UpdateAge show={ageVisibleUpdate} onHide={() => setAgeVisibleUpdate(false)} />
                        <UpdateCategory show={categoryVisibleUpdate} onHide={() => setCategoryVisibleUpdate(false)} />


                        <DeleteMaterial show={materialVisibleDelete} onHide={() => setMaterialVisibleDelete(false)} />
                        <DeleteEvent show={eventVisibleDelete} onHide={() => setEventVisibleDelete(false)} />
                        <DeleteLesson show={lessonVisibleDelete} onHide={() => setLessonVisibleDelete(false)} />
                    </div>
                </div>
            </div>
        </div>  
        
    );
};

export default Admin;
