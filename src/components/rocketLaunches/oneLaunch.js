export default function OneLaunch({rocket, img}) {
    return(
        <div className={'rocket'}>
            <div>Mission Name: {rocket.mission_name}</div>
            <div>Launch year: {rocket.launch_year}</div>
            <img src={img} alt={''}></img>
        </div>
    )
}