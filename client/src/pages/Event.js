import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneEvent } from "../http/eventAPI";
import '../index.css';

const Event = () => {
    const [event, setEvent] = useState();
    const {eventID} = useParams();

    useEffect(() => {
        fetchOneEvent(eventID).then(data => setEvent(data));
    }, []);

    if (!event) {
    return <div>Loading event details...</div>;
}

    const imageUrl = `${process.env.REACT_APP_API_URL}static/${event.img}`

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="column">
                    <img width={600} height={200} className="device-image" src={imageUrl} alt={event.title} />
                </div>
                <div className="column">
                    <div className="column-inner">
                        <h2>{event.title}</h2>
                        <h2>{event.description}</h2>
                        <h2>{event.dateAndTime}</h2>
                        <h2>{event.location}</h2>
                        <h2>{event.link}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
