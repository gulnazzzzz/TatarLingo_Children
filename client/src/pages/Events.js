import React, { useContext, useEffect } from 'react';
import EventCategoryBar from '../components/EventCategoryBar';
import EventList from '../components/EventList';
import '../index.css';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchEventCategories, fetchEvents} from "../http/eventAPI";

const Events = observer(() => {
    const { event } = useContext(Context);
    
    useEffect(() => {
    fetchEventCategories().then(data => {
        event.setEventCategories(data);
    });
    fetchEvents().then(data => {
        event.setEvents(data);
    });
}, []);

    useEffect(() => {
    if (event.selectedEventCategory) {
        fetchEvents(event.selectedEventCategory.eventCategoryID).then(data => {
            event.setEvents(data);
        });
    }
}, [event.selectedEventCategory]);

    return (
        <div className="events-container">
            <div className="sidebar">
                <EventCategoryBar />
            </div>
            <div className="main-content">
                <EventList />
            </div>
        </div>
    );
});

export default Events;
