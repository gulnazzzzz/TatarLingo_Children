// import React, { useContext } from 'react';
// import { observer } from "mobx-react-lite";
// import { Context } from "../index";
// import EventItem from "./EventItem";
// import '../index.css';

// const EventList = observer(() => {
//     const { event } = useContext(Context);

//     if (!event.events || event.events.length === 0) {
//         return <p>Загрузка событий...</p>;
//     }

//     return (
//         <div className="cards">
//             {event.events.slice().reverse().map(event => (
//                 <EventItem className="card" key={event.eventID} event={event} />
//             ))}
//         </div>
//     );
// });

// export default EventList;


import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import EventItem from "./EventItem";
import '../index.css';

const EventList = observer(() => {
    const { event } = useContext(Context);

    if (!event.filteredEvents || event.filteredEvents.length === 0) {
        return <p>Нет событий для отображения</p>;
    }

    return (
        <div className="cards">
            {event.filteredEvents.slice().reverse().map(event => (
                <EventItem className="card" key={event.eventID} event={event} />
            ))}
        </div>
    );
});

export default EventList;
