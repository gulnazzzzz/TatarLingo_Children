// import { makeAutoObservable } from "mobx";

// export default class EventStore {
//     constructor() {
//         this._events = [];
//         this._eventCategories = [];
//         this._selectedEventCategory = {};
//         makeAutoObservable(this);
//     }

//     setEventCategories(eventCategories) {
//         this._eventCategories = eventCategories;
//     }
//     setEvents(events) {
//         this._events = events;
//     }
//     setSelectedEventCategory(eventCategory) {
//         this._selectedEventCategory = eventCategory;
//     }

//     get eventCategories() {
//         return this._eventCategories;
//     }
//     get events() {
//         return this._events;
//     }
//     get selectedEventCategory() {
//         return this._selectedEventCategory;
//     }
// }



import { makeAutoObservable } from "mobx";

export default class EventStore {
    constructor() {
        this._events = [];
        this._eventCategories = [];
        this._selectedEventCategory = {};
        this._filteredEvents = []; // Добавить новое свойство
        makeAutoObservable(this);
    }

    setEventCategories(eventCategories) {
        this._eventCategories = eventCategories;
    }

    setEvents(events) {
        this._events = events;
        this.filterEvents(); // Вызов метода фильтрации после обновления событий
    }

    setSelectedEventCategory(eventCategory) {
        this._selectedEventCategory = eventCategory;
        this.filterEvents(); // Вызов метода фильтрации при выборе категории
    }

    filterEvents() {
        if (!this._selectedEventCategory.eventCategoryID) {
            this._filteredEvents = this._events;
        } else {
            this._filteredEvents = this._events.filter(event => event.eventCategoryEventCategoryID === this._selectedEventCategory.eventCategoryID);
        }
    }

    get eventCategories() {
        return this._eventCategories;
    }

    get events() {
        return this._events;
    }

    get selectedEventCategory() {
        return this._selectedEventCategory;
    }

    get filteredEvents() {
        return this._filteredEvents;
    }
}
