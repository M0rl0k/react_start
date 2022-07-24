import React from 'react';
import CommentsComponent from "../components/Comments/CommentsComponent";
import {Outlet} from "react-router";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>

        </div>
    );
};

export default CommentsPage;