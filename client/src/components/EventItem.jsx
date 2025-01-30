import React from 'react';
import { useNavigate } from "react-router-dom";
import { EVENT_ROUTE } from "../utils/consts";
import '../index.css';

const EventItem = ({ event }) => {
    const history = useNavigate();
    console.log(event)

    const imageUrl = `${process.env.REACT_APP_API_URL}static/${event.img}`

    return (
        <div className="event-item" onClick={() => history(EVENT_ROUTE + '/' + event.eventID)}>
            <div className="event-card">
                <img className="event-image" src={imageUrl} alt={event.name} />
                <div className='underImg_event'>
                    <p className="event-title">{event.title}</p>
                <div className="dateLocation">
                    <p className='marginNull'>{event.dateAndTime}</p>
                    <div className='betweenDateLocation'>
                    </div>
                    
                    <p className='marginNull'>{event.location}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EventItem;