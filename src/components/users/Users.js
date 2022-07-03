import {useEffect, useState} from "react";
import getUsers from "../../services/users.api.fetch/UsersFetch";
import User from "../user/User";

export default function Users({elevate}) {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(({data}) => setUsers([...data]))
    },[])



    return(
        <div>
            {users.map((user, index) => <User
                key={index}
                user={user}
                elevate={elevate}
            />)
            }
    </div>
    )

}
