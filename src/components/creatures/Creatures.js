import './Creatures.css'
export default function Creatures (props) {

    let {id, name, status, species, gender, image} = props;

    return(
        <div className={'creature'}>
            <img src={image} alt={''}/>
            <h2>{id}, {name}</h2>
            <h4>{status}, {species}, {gender}</h4>
        </div>
    )
}
