import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { updateAge, fetchAges } from '../../http/lessonAPI';

const UpdateAge = observer(({ show, onHide }) => {
  const { lesson } = useContext(Context);
  const [ageName, setAgeName] = useState('');
  const [selectedAgeID, setSelectedAgeID] = useState(null);

  useEffect(() => {
    if (selectedAgeID) {
      const selectedAge = lesson.ages.find(age => age.lessonAgeID === selectedAgeID);
      if (selectedAge) {
        setAgeName(selectedAge.name);
        lesson.setSelectedAge(selectedAge);
      }
    }
  }, [selectedAgeID, lesson.ages, lesson]);

  const editAge = () => {
    if (selectedAgeID) {
      updateAge(selectedAgeID, { name: ageName }).then(() => {
        fetchAges().then(data => {
          lesson.setAges(data);
          lesson.setSelectedAge(null);
          setSelectedAgeID(null);
          setAgeName('');
          onHide();
        });
      });
    }
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Редактировать возраст</h5>
          <button className="modalClose" type="button" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          {!selectedAgeID ? (
            <div>
              <h5>Выберите возраст для редактирования</h5>
              <ul>
                {lesson.ages.map(age => (
                  <li  className='lessonAgeLi' key={age.lessonAgeID} onClick={() => setSelectedAgeID(age.lessonAgeID)}>
                    {age.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={ageName}
                onChange={e => setAgeName(e.target.value)}
                placeholder="Введите название возраста"
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button className="modalClose" onClick={onHide}>Закрыть</button>
          {selectedAgeID && <button className="modalClick" onClick={editAge}>Сохранить изменения</button>}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default UpdateAge;
