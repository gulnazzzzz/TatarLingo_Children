import React from 'react';
import { useNavigate } from "react-router-dom";
import { EVENT_ROUTE } from "../utils/consts";
import '../index.css';

const EventItem = ({ event }) => {
    const history = useNavigate();
    console.log(event)

    const imageUrl = `${process.env.REACT_APP_API_URL}static/${event.img}`

    return (
        <div className="device-item" onClick={() => history(EVENT_ROUTE + '/' + event.eventID)}>
            <div className="device-card">
                <img width={240} height={160} className="device-image" src={imageUrl} alt={event.name} />
                <p>{event.title}</p>
                <p>{event.description}</p>
                <p>{event.dateAndTime}</p>
                <p>{event.location}</p>
                <p>{event.link}</p>
            </div>
        </div>
    );
};

export default EventItem;