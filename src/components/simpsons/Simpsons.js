import './Simpsons.css'

function Simpsons(props) {

    let {name, info, img} = props;

    return(
        <div className={'card'}>
            <h2>{name}</h2>
            <p>{info}</p>
            <img src={img} alt={''}/>
        </div>
    )
}

export default Simpsons;