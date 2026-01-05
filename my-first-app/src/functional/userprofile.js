const UserProfile = ({user,mentor}) =>{

    return (
        <div>
            <h1>User Data</h1>
            <p>Name : {user.name}</p>
            <p>Role : {user.role}</p> 

<hr/>
             <h1>Mentor Data</h1>
            <p>Name : {mentor.name}</p>
            <p>Company : {mentor.company}</p> 
        

        </div>
    )
}

export default UserProfile;