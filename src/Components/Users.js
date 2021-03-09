import { useEffect, useState } from "react";
import DashboardContainer from './Conteiners/DashboardConteiner';
import User from './Cards/UserItem';


function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.data.users)
        })
        
    },[])

    return(
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
            </div>

            <div className="row">
                {users.map((user, i)=> 
                    <DashboardContainer title={user.user_name}>
                        <User 
                            description={user.name + ' ' + user.last_name}
                            img={user.imgUrl}
                        />
                    </DashboardContainer>

                )}

            </div>
        
        
        
        
        
        
        
        </>
    )


    
}

export default Users;