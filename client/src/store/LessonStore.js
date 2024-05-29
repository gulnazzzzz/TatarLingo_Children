// import {makeAutoObservable} from "mobx";

// export default class LessonStore {
//     constructor() {
//         this._ages = []
//         this._categories = []
//         this._lessons = []
//         this._selectedAge = {}
//         this._selectedCategory = {}
//         makeAutoObservable(this)
//     }

//     setAges(ages) {
//         this._ages = ages
//     }
//     setCategories(categories) {
//         this._categories = categories
//     }
//     setLessons(lessons) {
//         this._lessons = lessons
//     }

//     setSelectedAge(lessonAge) {
//         this._selectedAge = lessonAge
//     }
//     setSelectedCategory(lessonCategory) {
//         this._selectedCategory = lessonCategory
//     }

//     get ages() {
//         return this._ages
//     }
//     get categories() {
//         return this._categories
//     }
//     get lessons() {
//         return this._lessons
//     }
//     get selectedAge() {
//         return this._selectedAge
//     }
//     get selectedCategory() {
//         return this._selectedCategory
//     }
// }


import { makeAutoObservable } from "mobx";

export default class LessonStore {
    constructor() {
        this._ages = [];
        this._categories = [];
        this._lessons = [];
        this._filteredLessons = [];
        this._selectedAge = {};
        this._selectedCategory = {};
        makeAutoObservable(this);
    }

    setAges(ages) {
        this._ages = ages;
    }
    setCategories(categories) {
        this._categories = categories;
    }
    setLessons(lessons) {
        this._lessons = lessons;
        this.filterLessons(); // Вызов метода фильтрации после обновления уроков
    }

    setSelectedAge(lessonAge) {
        this._selectedAge = lessonAge;
        this.filterLessons(); // Вызов метода фильтрации при выборе возраста
    }
    setSelectedCategory(lessonCategory) {
        this._selectedCategory = lessonCategory;
        this.filterLessons(); // Вызов метода фильтрации при выборе категории
    }

    filterLessons() {
        if (!this._selectedAge || !this._selectedAge.lessonAgeID || !this._selectedCategory || !this._selectedCategory.lessonCategoryID) {
            this._filteredLessons = this._lessons;
        } else {
            this._filteredLessons = this._lessons.filter(lesson => 
                lesson.lessonAgeLessonAgeID === this._selectedAge.lessonAgeID && 
                lesson.lessonCategoryLessonCategoryID === this._selectedCategory.lessonCategoryID
            );
        }
    }

    get ages() {
        return this._ages;
    }
    get categories() {
        return this._categories;
    }
    get lessons() {
        return this._lessons;
    }
    get selectedAge() {
        return this._selectedAge;
    }
    get selectedCategory() {
        return this._selectedCategory;
    }
    get filteredLessons() {
        return this._filteredLessons;
    }
}
