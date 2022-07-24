import React from 'react';

const AlbumComponent = ({album}) => {
    return (
        <div className={'element'}>
            {`ID: ${album.id} Title: ${album.title}`}
        </div>
    );
};

export default AlbumComponent;