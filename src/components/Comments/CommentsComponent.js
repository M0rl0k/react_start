import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/api.service";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments()
            .then(value => value.json())
            .then(value => setComments([...value]))
    }, [])

    return (
        <div className={'main'}>
            {comments.map((comment,index)=> <CommentComponent comment={comment} key={index}/>)}
        </div>
    );
};

export default CommentsComponent;