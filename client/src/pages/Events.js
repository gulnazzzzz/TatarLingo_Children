import React, { useState } from 'react';
import EventCategoryBar from '../components/EventCategoryBar';
import '../index.css';

export default function Events() {
  return (
    <div>
      {/* <EventCategoryBar></EventCategoryBar> */}
      Мероприятия
    </div>
  );
}


// // Events.jsx
// import React, { useState } from 'react';
// import EventCategoryBar from './EventCategoryBar';
// import './Events.css';

// const Events = ({ categories, events }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleSelectCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="events-page">
//       <EventCategoryBar categories={categories} onSelectCategory={handleSelectCategory} />
//       <div className="events-container">
//         {events.filter(event => !selectedCategory || event.category === selectedCategory.id)
//           .map((event, index) => (
//             <div key={index} className="event-item">
//               <h3>{event.title}</h3>
//               <img src={event.image} alt={event.title} />
//               <p>{event.description}</p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default Events;
