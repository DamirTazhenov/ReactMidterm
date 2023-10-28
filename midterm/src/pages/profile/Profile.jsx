import React, {useState} from 'react';
import classes from "./Profile.module.css"
import MyInput from "../../components/UI/input/MyInput";

const Profile = () => {
    const [name, setName] = useState("Damir")
    const [surname, setSurname] = useState("Tazhenov")
    const [email, setEmail] = useState("d_tazhenov@kbtu.kz")
    const [password, setPassword] = useState('123')
    const [date, setDate] = useState()
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    return (
        <div className={classes.main}>
            <img
                src={imageFile}
                alt="Выбрать файл"
            />

            <MyInput id="audioImage" type="file" accept="image/*" onChange={handleImageUpload} />
            <MyInput value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
            <MyInput value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Surname"/>
            <MyInput value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <MyInput value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password"/>
            <MyInput value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="birthday"/>
        </div>
    );
};

export default Profile;