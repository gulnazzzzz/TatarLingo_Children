import React, { createContext, useState, useEffect } from 'react';
import { fetchEvents, fetchEventCategories } from '../http/eventAPI';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [eventCategories, setEventCategories] = useState([]);
    const [selectedEventCategory, setSelectedEventCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [eventsData, categoriesData] = await Promise.all([fetchEvents(), fetchEventCategories()]);
                setEvents(eventsData);
                setEventCategories(categoriesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <EventContext.Provider value={{ events, eventCategories, selectedEventCategory, setSelectedEventCategory, loading }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContext;
