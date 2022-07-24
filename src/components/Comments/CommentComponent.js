import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";


const CommentComponent = ({comment}) => {


    return (
        <div className={'element'}>
            {`ID: ${comment.id} Name: ${comment.name} Title: ${comment.body}`}
            <br/>
            {<Link to={'post-' + comment.postId}>Get Post</Link>}
        </div>
    );
};

export default CommentComponent;