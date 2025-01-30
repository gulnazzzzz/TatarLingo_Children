import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import LessonStore from './store/LessonStore';
import MaterialStore from './store/MaterialStore';
import EventStore from './store/EventStore';
import { EventProvider } from './contexts/EventContext';
import { MaterialProvider } from './contexts/MaterialContext'; // Новый импорт

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    lesson: new LessonStore(),
    material: new MaterialStore(),
    event: new EventStore(),
  }}>
    <EventProvider>
      <MaterialProvider> {/* Новый провайдер */}
        <App />
      </MaterialProvider>
    </EventProvider>
  </Context.Provider>
);
