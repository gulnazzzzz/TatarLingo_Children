// import React, { useContext, useEffect } from 'react';
// import EventCategoryBar from '../components/EventCategoryBar';
// import EventList from '../components/EventList';
// import '../index.css';
// import { observer } from "mobx-react-lite";
// import { Context } from "../index";
// import { fetchEventCategories, fetchEvents} from "../http/eventAPI";

// const Events = observer(() => {
//     const { event } = useContext(Context);
    
//     useEffect(() => {
//     fetchEventCategories().then(data => {
//         event.setEventCategories(data);
//     });
//     fetchEvents().then(data => {
//         event.setEvents(data);
//     });
// }, []);

//     useEffect(() => {
//     if (event.selectedEventCategory) {
//         fetchEvents(event.selectedEventCategory.eventCategoryID).then(data => {
//             event.setEvents(data);
//         });
//     }
// }, [event.selectedEventCategory]);

//     return (
//         <div className="many-container">
//             <div className="radius-container">
//                 <div className='radius-container-content'>
//                     <p className='page-title'>Детские мероприятия: знакомство с татарской культурой в Казани</p>
//                     <div>
//                         <div className="category">
//                             <EventCategoryBar />
//                         </div>
//                         <div className="cards">
//                             <EventList />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>  
//     );
// });

// export default Events;



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
        <div className="many-container">
            <div className="radius-container">
                <div className='radius-container-content'>
                    <p className='page-title'>Детские мероприятия: знакомство с татарской культурой в Казани</p>
                    <div>
                        <div className="category">
                            <EventCategoryBar />
                        </div>
                        <div className="cards">
                            <EventList />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
});

export default Events;
