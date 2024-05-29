import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import axios from 'axios';
import '../../index.css';

const UpdateProfile = observer(({ show, onHide, profileData, setProfileData }) => {
    const { user } = useContext(Context);
    const [file, setFile] = useState(null);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const editProfile = async () => {
        const formData = new FormData();
        if (file) {
            formData.append('photo', file);
        }
        formData.append('name', profileData.name);
        formData.append('birthday', profileData.birthday);

        try {
            const userId = user.user.userID; // Предположим, что userID доступен в user.user
            await axios.put(`${process.env.REACT_APP_API_URL}api/user/${userId}`, formData);
            onHide(); // Close the modal after successful update
            // Update user data after successful profile update
            user.setUser({
              ...user.user,
              name: profileData.name,
              birthday: profileData.birthday,
            });
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Редактировать профиль</h5>
                    <button type="button" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <input
                        type="file"
                        onChange={selectFile}
                    />
                    <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        placeholder="Введите имя"
                    />
                    <input
                        type="date"
                        name="birthday"
                        value={profileData.birthday}
                        onChange={(e) => setProfileData({ ...profileData, birthday: e.target.value })}
                        placeholder="Введите дату рождения"
                    />
                </div>
                <div className="modal-footer">
                    <button onClick={onHide}>Закрыть</button>
                    <button onClick={editProfile}>Сохранить изменения</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default UpdateProfile;
