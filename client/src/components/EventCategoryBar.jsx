import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const EventCategoryBar = observer(() => {
  const {event} = useContext(Context)
  return (
    <div className="event-category-bar">
      {event.eventCategory.map((eventCategory, index) => (
        <button key={index} /* onClick={() => setSelectedBrand(eventCategory)} */ >
          {eventCategory.name}
        </button>
      ))}
    </div>
  );
});

export default EventCategoryBar;
