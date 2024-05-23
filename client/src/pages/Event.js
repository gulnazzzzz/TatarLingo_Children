import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOneEvent } from "../http/eventAPI";
import home from '../assets/home.svg';
import '../index.css';

const Event = () => {
    const [event, setEvent] = useState();
    const { eventID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchOneEvent(eventID).then(data => setEvent(data));
    }, [eventID]);

    if (!event) {
        return <div>Loading event details...</div>;
    }

    const imageUrl = `${process.env.REACT_APP_API_URL}static/${event.img}`;

    return (
        <div className="many-container">
            <div className="radius-container">
                <div className="radius-container-content">
                    <div className="event-page-top">
                        <button className='backButton' onClick={() => navigate(-1)}>
                            <img src={home} alt="Back"/>
                            <span>НАЗАД</span>
                        </button>
                        <p className="event-page-title">{event.title}</p>
                    </div>
                    <img className="event-page-image" src={imageUrl} alt={event.title} />
                    <div className="event-details">
                        <div className="event-info">
                            <p className="event-date">{event.dateAndTime}</p>
                            <p className="event-location">{event.location}</p>
                            <a href={event.link} className="event-link-button">КУПИТЬ БИЛЕТЫ</a>
                        </div>
                        <div className="event-description">
                            <p className="event-description-p">{event.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;