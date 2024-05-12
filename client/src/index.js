import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import LessonStore from './store/LessonStore';
import MaterialStore from './store/MaterialStore';
import EventStore from './store/EventStore';

export const Context = createContext(null)
// console.log(process.env.REACT_APP_API_URL)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={
      {
        user: new UserStore(),
        device: new LessonStore(),
        material: new MaterialStore(),
        event: new EventStore(),
      }
    }>
      <App />
    </Context.Provider>
);

