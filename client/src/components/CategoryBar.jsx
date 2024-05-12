import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const CategoryBar = observer(() => {
    const {lesson} = useContext(Context)
    return (
        <div className="categories">
            <h3>Категории:</h3>
            <ul>
                {lesson.lessonCategories.map(lessonCategory => (
                    <li /* active={lessonCategory.lessonCategoryID === lesson.selectedCategory.lessonCategoryLessonCategoryID}  */
                    key={lessonCategory.lessonCategoryID} onClick={() => lesson.setSelectedCategory(lessonCategory)}>{lessonCategory.name}</li>
                ))}
            </ul>
        </div>
    );
});

export default CategoryBar;