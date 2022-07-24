import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getCurrentPost} from "../../services/api.service";

const PostComponent = () => {

    let {id} = useParams();

    console.log(id)

    const [post, setPost] = useState({});

    useEffect(()=>{
        getCurrentPost(id)
            .then(value => value.json())
            .then(value => setPost({...value}))
    }, [id])

    console.log(post)

    return (
        <h2>
            ID: {post.id} Title:{post.title}
        </h2>
    );
};

export default PostComponent;