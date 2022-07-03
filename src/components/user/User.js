export default function User({user, elevate}) {

    const onclick = () => {
      elevate(user.id)
    }
    
    return(<div className={'user'}>
        <h4>{user.name} {user.id}</h4>
        <button onClick={onclick}>Get Posts</button>
    </div>)
}