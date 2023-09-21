import { linkContext } from "../../Context/linkContext";
import { useContext, useEffect, useState } from "react";

import "./index.css"

export const ProfileDetails = () => {
    const { data, handleOnChangeName, handleOnChangeEmail, handleOnChangeAvatar } = useContext(linkContext);
    const [firstAndLastName, setFirstAndLastName] = useState({
        firstName: "",
        lastName: "",
    })
    useEffect(() => {
        handleOnChangeName(firstAndLastName.firstName + ' ' + firstAndLastName.lastName)
    }, [firstAndLastName])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                handleOnChangeAvatar(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (<div className="inputprofiledetails">
        <div className="heading">
            <h1>Profile Details</h1>
            <p>Add your details to create a personal touch to your profile.</p>

        </div>

        <div className="profile-form">
            <div className="Picture-preview">
                <p>Profile Picture</p>
                {data.avatar && <img src={data.avatar} alt="Profile Preview" />}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <div className="profile-inputs">
                <div className='input'>
                    <p> FirstName</p>
                    <input
                        type="text"
                        placeholder="e.g Ali"
                        value={firstAndLastName.firstName}
                        onChange={(e) => setFirstAndLastName((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                        }))}
                    />

                </div>
                <div className='input'>
                    <p>Last Name</p>
                    <input
                        type="text"
                        placeholder="e.g Ahmed"
                        value={firstAndLastName.lastName}
                        onChange={(e) => setFirstAndLastName((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                        }))}
                    />

                </div>
                <div className='input'>
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder= "e.g emon@linkat.com"
                        value={data.email}
                        onChange={(e) => handleOnChangeEmail(e.target.value)}
                    />
                </div>
            </div>
        </div>
    </div>)
}