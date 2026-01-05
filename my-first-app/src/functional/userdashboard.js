import {  useState } from "react";
import UserProfile from "./userprofile";
function UserDashboard () {
    
   const [user,setUser]  = useState({
        name:"Ananya",
        role:"Developer"

    });
   const[mentor,setMentor] = useState({
    name: "Saratha",
    company:"Guvi"

    });
    return (
        <div>
            <UserProfile user={user}  mentor={mentor} />
        </div>
    )
}

export default UserDashboard;