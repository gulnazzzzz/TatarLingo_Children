import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._events = [];
        this._eventCategories = [];
        this._selectedEventCategory = {};
    makeAutoObservable(this);
}

    setEventCategories(eventCategories) {
        this._eventCategories = eventCategories
    }
    setEvents(events) {
        this._events = events
    }
    
    setSelectedEventCategory(eventCategory) {
        this._selectedEventCategory = eventCategory
    }

    get eventCategories() {
        return this._eventCategories
    }
    get events() {
        return this._events
    }
    
    get selectedEventCategory() {
        return this._selectedEventCategory
    }
}
