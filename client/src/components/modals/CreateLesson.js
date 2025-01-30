// import React, { useContext, useEffect, useState } from 'react';
// import { observer } from 'mobx-react-lite';
// import { Context } from '../../index';
// import { createLesson, fetchAges, fetchCategories } from '../../http/lessonAPI';

// const CreateLesson = observer(({ show, onHide }) => {
//     const { lesson } = useContext(Context);
//     const [title, setTitle] = useState('');
//     const [file, setFile] = useState(null);
//     const [theoryBlocks, setTheoryBlocks] = useState([]);
//     const [taskBlocks, setTaskBlocks] = useState([]);

//     useEffect(() => {
//         fetchAges().then(data => lesson.setAges(data));
//         fetchCategories().then(data => lesson.setCategories(data));
//     }, [lesson]);

//     const selectFile = e => {
//         setFile(e.target.files[0]);
//     };

//     const handleTheoryChange = (index, field, value) => {
//         const updatedBlocks = [...theoryBlocks];
//         updatedBlocks[index][field] = value;
//         setTheoryBlocks(updatedBlocks);
//     };

//     const handleTaskChange = (index, field, value) => {
//         const updatedBlocks = [...taskBlocks];
//         updatedBlocks[index][field] = value;
//         setTaskBlocks(updatedBlocks);
//     };

//     const addLesson = () => {
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('img', file);
//         formData.append('lessonAgeLessonAgeID', lesson.selectedAge.lessonAgeID);
//         formData.append('lessonCategoryLessonCategoryID', lesson.selectedCategory.lessonCategoryID);
        
//         // Add theory blocks to formData
//         theoryBlocks.forEach(block => {
//             formData.append('theoryBlocks', JSON.stringify(block));
//         });

//         // Add task blocks to formData
//         taskBlocks.forEach(block => {
//             formData.append('taskBlocks', JSON.stringify(block));
//         });

//         createLesson(formData).then(data => onHide());
//     };

//     if (!show) return null;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5>Добавить урок</h5>
//                     <button type="button" onClick={onHide}>×</button>
//                 </div>
//                 <div className="modal-body">
//                     <div className="dropdown">
//                         <button className="dropdown-toggle">{lesson.selectedAge.name || "Выберите возраст"}</button>
//                         <div className="dropdown-menu">
//                             {lesson.ages.map(lessonAge => (
//                                 <div key={lessonAge.lessonAgeID} onClick={() => lesson.setSelectedAge(lessonAge)}>
//                                     {lessonAge.name}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="dropdown">
//                         <button className="dropdown-toggle">{lesson.selectedCategory.name || "Выберите категорию"}</button>
//                         <div className="dropdown-menu">
//                             {lesson.categories.map(lessonCategory => (
//                                 <div key={lessonCategory.lessonCategoryID} onClick={() => lesson.setSelectedCategory(lessonCategory)}>
//                                     {lessonCategory.name}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={e => setTitle(e.target.value)}
//                         placeholder="Введите название урока"
//                     />
                    
//                     <input
//                         type="file"
//                         onChange={selectFile}
//                     />

//                     {/* Theory Blocks */}
//                     {theoryBlocks.map((block, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={block.audio || ''}
//                                 onChange={e => handleTheoryChange(index, 'audio', e.target.value)}
//                                 placeholder="Аудио (URL)"
//                             />
//                             <input
//                                 type="text"
//                                 value={block.tatarText || ''}
//                                 onChange={e => handleTheoryChange(index, 'tatarText', e.target.value)}
//                                 placeholder="Текст на татарском"
//                             />
//                             <input
//                                 type="text"
//                                 value={block.translatedText || ''}
//                                 onChange={e => handleTheoryChange(index, 'translatedText', e.target.value)}
//                                 placeholder="Перевод текста"
//                             />
//                             <input
//                                 type="file"
//                                 onChange={selectFile}
//                             />
//                         </div>
//                     ))}
//                     <button onClick={() => setTheoryBlocks([...theoryBlocks, {}])}>Добавить блок теории</button>

//                     {/* Task Blocks */}
//                     {taskBlocks.map((block, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={block.audio || ''}
//                                 onChange={e => handleTaskChange(index, 'audio', e.target.value)}
//                                 placeholder="Аудио (URL)"
//                             />
//                             <input
//                                 type="text"
//                                 value={block.tatarText || ''}
//                                 onChange={e => handleTaskChange(index, 'tatarText', e.target.value)}
//                                 placeholder="Текст на татарском"
//                             />
//                             <input
//                                 type="text"
//                                 value={block.translatedText || ''}
//                                 onChange={e => handleTaskChange(index, 'translatedText', e.target.value)}
//                                 placeholder="Перевод текста"
//                             />
//                             <input
//                                 type="file"
//                                 onChange={selectFile}
//                             />
//                             <input
//                                 type="file"
//                                 onChange={selectFile}
//                             />
//                         </div>
//                     ))}
//                     <button onClick={() => setTaskBlocks([...taskBlocks, {}])}>Добавить блок задания</button>
//                 </div>
//                 <div className="modal-footer">
//                     <button onClick={onHide}>Закрыть</button>
//                     <button onClick={addLesson}>Добавить</button>
//                 </div>
//             </div>
//             <div className="modal-backdrop" onClick={onHide}></div>
//         </div>
//     );
// });

// export default CreateLesson;


import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createLesson, fetchAges, fetchCategories } from '../../http/lessonAPI';

const CreateLesson = observer(({ show, onHide }) => {
    const { lesson } = useContext(Context);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [theoryBlocks, setTheoryBlocks] = useState([]);
    const [taskBlocks, setTaskBlocks] = useState([]);
    const [theoryBlockImage, setTheoryBlockImage] = useState(null);
    const [taskBlockCorrectImage, setTaskBlockCorrectImage] = useState(null);
    const [taskBlockWrongImage, setTaskBlockWrongImage] = useState(null);

    useEffect(() => {
        fetchAges().then(data => lesson.setAges(data));
        fetchCategories().then(data => lesson.setCategories(data));
    }, [lesson]);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const handleTheoryChange = (index, field, value) => {
        const updatedBlocks = [...theoryBlocks];
        updatedBlocks[index] = { ...updatedBlocks[index], [field]: value };
        setTheoryBlocks(updatedBlocks);
    };

    const handleTaskChange = (index, field, value) => {
        const updatedBlocks = [...taskBlocks];
        updatedBlocks[index] = { ...updatedBlocks[index], [field]: value };
        setTaskBlocks(updatedBlocks);
    };

    const selectTheoryBlockImage = (index, e) => {
        const updatedBlocks = [...theoryBlocks];
        updatedBlocks[index] = { ...updatedBlocks[index], img: e.target.files[0] };
        setTheoryBlocks(updatedBlocks);
    };

    const selectTaskBlockCorrectImage = (index, e) => {
        const updatedBlocks = [...taskBlocks];
        updatedBlocks[index] = { ...updatedBlocks[index], correctImg: e.target.files[0] };
        setTaskBlocks(updatedBlocks);
    };

    const selectTaskBlockWrongImage = (index, e) => {
        const updatedBlocks = [...taskBlocks];
        updatedBlocks[index] = { ...updatedBlocks[index], wrongImg: e.target.files[0] };
        setTaskBlocks(updatedBlocks);
    };

    const addLesson = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('img', file);
        formData.append('lessonAgeLessonAgeID', lesson.selectedAge.lessonAgeID);
        formData.append('lessonCategoryLessonCategoryID', lesson.selectedCategory.lessonCategoryID);

        theoryBlocks.forEach((block, index) => {
            formData.append(`theoryBlocks[${index}][audio]`, block.audio || '');
            formData.append(`theoryBlocks[${index}][tatarText]`, block.tatarText || '');
            formData.append(`theoryBlocks[${index}][translatedText]`, block.translatedText || '');
            if (block.img) {
                formData.append(`theoryBlocks[${index}][img]`, block.img);
            }
        });

        taskBlocks.forEach((block, index) => {
            formData.append(`taskBlocks[${index}][audio]`, block.audio || '');
            formData.append(`taskBlocks[${index}][tatarText]`, block.tatarText || '');
            formData.append(`taskBlocks[${index}][translatedText]`, block.translatedText || '');
            if (block.correctImg) {
                formData.append(`taskBlocks[${index}][correctImg]`, block.correctImg);
            }
            if (block.wrongImg) {
                formData.append(`taskBlocks[${index}][wrongImg]`, block.wrongImg);
            }
        });

        createLesson(formData).then(data => onHide());
        console.log(theoryBlocks)
        console.log(taskBlocks)
    };

    const addTheoryBlock = () => {
        setTheoryBlocks([...theoryBlocks, { audio: '', tatarText: '', translatedText: '', img: null }]);
    };

    const addTaskBlock = () => {
        setTaskBlocks([...taskBlocks, { audio: '', tatarText: '', translatedText: '', correctImg: null, wrongImg: null }]);
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Добавить урок</h5>
                    <button type="button" className="modalClose" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <div className="dropdown">
                        <button className="buttonModalCat">{lesson.selectedAge.name || "Выберите возраст"}</button>
                        <div className="dropdown-menu">
                            {lesson.ages.map(lessonAge => (
                                <div key={lessonAge.lessonAgeID} onClick={() => lesson.setSelectedAge(lessonAge)}>
                                    {lessonAge.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="buttonModalCat">{lesson.selectedCategory.name || "Выберите категорию"}</button>
                        <div className="dropdown-menu">
                            {lesson.categories.map(lessonCategory => (
                                <div key={lessonCategory.lessonCategoryID} onClick={() => lesson.setSelectedCategory(lessonCategory)}>
                                    {lessonCategory.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input className="modalForm"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название урока"
                    />
                    
                    <input className="modalForm"
                        type="file"
                        onChange={selectFile}
                    />

                    

                    {theoryBlocks.map((block, index) => (
                        <div key={index}>
                            <input className="modalForm"
                                type="text"
                                value={block.audio || ''}
                                onChange={e => handleTheoryChange(index, 'audio', e.target.value)}
                                placeholder="Аудио (URL)"
                            />
                            <input className="modalForm"
                                type="text"
                                value={block.tatarText || ''}
                                onChange={e => handleTheoryChange(index, 'tatarText', e.target.value)}
                                placeholder="Текст на татарском"
                            />
                            <input className="modalForm"
                                type="text"
                                value={block.translatedText || ''}
                                onChange={e => handleTheoryChange(index, 'translatedText', e.target.value)}
                                placeholder="Перевод текста"
                            />
                            <input className="modalForm"
                                type="file"
                                onChange={e => selectTheoryBlockImage(index, e)}
                            />
                        </div>
                    ))}

                    {taskBlocks.map((block, index) => (
                        <div key={index}>
                            <input className="modalForm"
                                type="text"
                                value={block.audio || ''}
                                onChange={e => handleTaskChange(index, 'audio', e.target.value)}
                                placeholder="Аудио (URL)"
                            />
                            <input className="modalForm"
                                type="text"
                                value={block.tatarText || ''}
                                onChange={e => handleTaskChange(index, 'tatarText', e.target.value)}
                                placeholder="Текст на татарском"
                            />
                            <input className="modalForm"
                                type="text"
                                value={block.translatedText || ''}
                                onChange={e => handleTaskChange(index, 'translatedText', e.target.value)}
                                placeholder="Перевод текста"
                            />
                            <input className="modalForm"
                                type="file"
                                onChange={e => selectTaskBlockCorrectImage(index, e)}
                            />
                            <input className="modalForm"
                                type="file"
                                onChange={e => selectTaskBlockWrongImage(index, e)}
                            />
                        </div>
                    ))}

                    {/* <button onClick={addTheoryBlock}>Добавить блок теории</button>
                    <button onClick={addTaskBlock}>Добавить блок задания</button> */}
                </div>
                <div className="modal-footer">
                    <button className="modalClose" onClick={onHide}>Закрыть</button>
                    <button className="modalClick" onClick={addLesson}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default CreateLesson;