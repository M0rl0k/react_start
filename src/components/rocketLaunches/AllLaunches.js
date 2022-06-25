import {useEffect, useState} from "react";
import OneLaunch from "./oneLaunch";

export default function AllLaunches() {
    let [rockets, setRockets] = useState([])


    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setRockets(value))
    },[])

    return(
        <div className={'rockets'}>
            <h2>SpaceX Launches</h2>
            {
                rockets.filter(rocket => rocket.launch_year != '2020').map((rocket, index) =>
                    <OneLaunch
                        rocket={rocket}
                        key={index}
                        img={rocket.links.mission_patch_small}
                />)
            }
        </div>
    )

}