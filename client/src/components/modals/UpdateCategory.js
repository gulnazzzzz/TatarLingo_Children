import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { updateCategory, fetchCategories } from '../../http/lessonAPI';

const UpdateCategory = observer(({ show, onHide }) => {
  const { lesson } = useContext(Context);
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);

  useEffect(() => {
    if (selectedCategoryID) {
      const selectedCategory = lesson.categories.find(cat => cat.lessonCategoryID === selectedCategoryID);
      if (selectedCategory) {
        setCategoryName(selectedCategory.name);
        lesson.setSelectedCategory(selectedCategory);
      }
    }
  }, [selectedCategoryID, lesson.categories, lesson]);

  const editCategory = () => {
    if (selectedCategoryID) {
      updateCategory(selectedCategoryID, { name: categoryName }).then(() => {
        fetchCategories().then(data => {
          lesson.setCategories(data);
          lesson.setSelectedCategory(null);
          setSelectedCategoryID(null);
          setCategoryName('');
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
          <h5>Редактировать категорию урока</h5>
          <button  className="modalClose" type="button" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          {!selectedCategoryID ? (
            <div>
              <h5>Выберите категорию урока для редактирования</h5>
              <ul>
                {lesson.categories.map(cat => (
                  <li  className='lessonAgeLi' key={cat.lessonCategoryID} onClick={() => setSelectedCategoryID(cat.lessonCategoryID)}>
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
                placeholder="Введите название категории"
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button  className="modalClose" onClick={onHide}>Закрыть</button>
          {selectedCategoryID && <button className="modalClick" onClick={editCategory}>Сохранить изменения</button>}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default UpdateCategory;
