import React, { useContext, useState } from 'react';
import { Context } from "../index";
import '../index.css';
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import childPhoto from '../assets/girl.svg'
import home from '../assets/home.svg';
import { MAIN_ROUTE } from "../utils/consts";
import UpdateProfile from "../components/modals/UpdateProfile";

const Profile = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const imageUrl = user.user.fileName ? `${process.env.REACT_APP_API_URL}static/children/${user.user.fileName}` : childPhoto;
    const [profileData, setProfileData] = useState({
        name: user.user.name || '',
        birthday: user.user.birthday || '',
    });
    const [profileUpdate, setProfileUpdate] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');  // Ensure this is the correct key
        user.setUser({});  // Reset user data
        user.setIsAuth(false);  // Update authentication state
        navigate(MAIN_ROUTE);
    }

    const calculateAge = (birthday) => {
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const age = calculateAge(user.user.birthday);

    return (
        <div className="many-container">
            <div className="radius-container">
                <div className='radius-container-content'>
                    <div className="profileContent">
                        <div className="childInfo">
                            <img width={350} height={350} className="child_profile_photo" src={imageUrl} alt="Фото ребенка" />
                            <p className="childName">{profileData.name}</p>
                            <p className="childAge">{age} {age >= 5 ? 'лет' : 'года'}</p>
                            <button className='backButtonPr updateProfileButton' onClick={() => setProfileUpdate(true)}>
                                <span>РЕДАКТИРОВАТЬ</span>
                            </button>
                            <button className='backButtonPr updateProfileButton backProfileButton' onClick={logOut}>ВЫЙТИ</button>
                        </div>
                        <div className="statistics">
                            <p>Здесь будет недельная активность</p>
                        </div>
                    </div>
                </div>
            </div>
            {profileUpdate && <UpdateProfile show={profileUpdate} onHide={() => setProfileUpdate(false)} profileData={profileData} setProfileData={setProfileData} />}
        </div>
    );
});

export default Profile;
