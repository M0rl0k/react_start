import React, {useEffect, useState} from 'react';
import {getAlbums} from "../../services/api.service";
import AlbumComponent from "./AlbumComponent";

const AlbumsComponent = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        getAlbums()
            .then(value => value.json())
            .then(value => setAlbums([...value]));
    }, [])

    return (
        <div className={'main'}>
            {albums.map((album, index) => <AlbumComponent album={album} key={index}/>)}
        </div>
    );
};

export default AlbumsComponent;