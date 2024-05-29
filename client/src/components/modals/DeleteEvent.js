import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { deleteEvent, fetchEvents } from '../../http/eventAPI';

const DeleteEvent = observer(({ show, onHide }) => {
  const { event } = useContext(Context);
  const [selectedEventID, setSelectedEventID] = useState('');

  useEffect(() => {
    fetchEvents().then(data => event.setEvents(data));
  }, [event]);

  const handleDelete = async () => {
    if (!selectedEventID) {
      return;
    }

    try {
      await deleteEvent(selectedEventID);
      const updatedEvents = await fetchEvents();
      event.setEvents(updatedEvents);
      setSelectedEventID('');
      onHide();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Удалить мероприятие</h5>
          <button type="button" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          <select value={selectedEventID} onChange={e => setSelectedEventID(e.target.value)}>
            <option value="">Выберите мероприятие для удаления</option>
            {event.filteredEvents.map(ev => (
              <option key={ev.eventID} value={ev.eventID}>
                {ev.title}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={onHide}>Закрыть</button>
          <button onClick={handleDelete} disabled={!selectedEventID}>Удалить</button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default DeleteEvent;
