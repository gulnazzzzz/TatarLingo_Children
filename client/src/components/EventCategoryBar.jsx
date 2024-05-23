import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const EventCategoryBar = observer(() => {
  const { event } = useContext(Context);

  const handleShowAllEvents = () => {
    event.setSelectedEventCategory({}); // Сброс выбранной категории
  };

  return (
    <div className="category">
      <button className="categoryButton" onClick={handleShowAllEvents}>Все мероприятия</button>
      {event.eventCategories.map(eventCategory => (
        <button className="categoryButton" key={eventCategory.eventCategoryID} onClick={() => event.setSelectedEventCategory(eventCategory)} >
          {eventCategory.name}
        </button>
      ))}
    </div>
  );
});

export default EventCategoryBar;