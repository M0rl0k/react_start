export default function User({user}) {

    return(<div className={'user'}>
        <h4>{user.name} {user.id}</h4>
    </div>)
}