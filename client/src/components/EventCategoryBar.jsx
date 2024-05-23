import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const EventCategoryBar = observer(() => {
  const {event} = useContext(Context)
  return (
    <div className="category">
      {event.eventCategories.map((eventCategory, index) => (
        <button className="categoryButton" key={index} /* onClick={() => setSelectedEvent(eventCategory)} */ >
          {eventCategory.name}
        </button>
      ))}
    </div>
  );
});

export default EventCategoryBar;
