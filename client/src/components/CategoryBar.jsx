import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import '../index.css';

const CategoryBar = observer(() => {
    const { lesson } = useContext(Context);

    const handleCategoryClick = (categoryID) => {
        lesson.setSelectedCategory(lesson.categories.find(cat => cat.lessonCategoryID === categoryID));
    };

    const handleShowAllCategories = () => {
        lesson.setSelectedCategory({}); // Установка пустого объекта
    };

    return (
        <div className="categories">
            <h3>Категории:</h3>
            <button onClick={handleShowAllCategories}>Все категории</button>
            <ul>
                {lesson.categories.map(lessonCategory => (
                    <li
                        key={lessonCategory.lessonCategoryID}
                        className={lesson.selectedCategory === lessonCategory ? "selected" : ""}
                        onClick={() => handleCategoryClick(lessonCategory.lessonCategoryID)}
                    >
                        {lessonCategory.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default CategoryBar;
