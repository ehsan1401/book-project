import { useParams } from 'react-router-dom';
import users from '../db/Json/users.json';

const UserDashboadrd = () => {
    const { userID } = useParams();
    console.log(userID);

    return ( 
        <div className="dashboadrd">
            {users.map((user)=>{
                if(userID == user.userID){
                    return(
                        <div className="user">
                            <p>{user.email}</p>
                            <p>{user.userID}</p>
                            <p>{user.password}</p>
                            

                        </div>
                    )
                }
            })}    
        </div>
     );
}
 
export default UserDashboadrd;