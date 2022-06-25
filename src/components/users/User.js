
export default function User({user, choseUser}) {
        return(
            <div className={'user'}>
                {user.id} {user.name}
                <button onClick={()=>{
                    choseUser(user);
                }}>Get details</button>
            </div>
        )
}