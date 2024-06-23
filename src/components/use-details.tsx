"use client"

import UserProfileCard from "./user-profile-card"

export default function UserDetail(){
    const user = {
        profilePicture: "https://cdn-icons-png.flaticon.com/512/1436/1436722.png",
        name: "John Doe",
        email: "john@example.com"
    }

    const handleContactClick = () => { window.alert("Contact Button")}

    return (
        <>
            <h1>사용자 프로필</h1>
            <UserProfileCard user={user} onContactClick={handleContactClick}/>
        </>
    )
}
