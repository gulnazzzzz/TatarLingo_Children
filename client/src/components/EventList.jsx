import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import EventItem from "./EventItem";
import '../index.css';

const EventList = observer(() => {
    const { event } = useContext(Context);

    if (!event.events || event.events.length === 0) {
        return <p>Загрузка событий...</p>;
    }

    return (
        <div className="event-list">
            {event.events.map(event => (
                <EventItem key={event.eventID} event={event} />
            ))}
        </div>
    );
});

export default EventList;

