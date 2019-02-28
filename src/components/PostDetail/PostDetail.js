import React from 'react';

import "./PostDetail.css";

const PostDetail = (props) => {
    return (
        <div className="post-detail">
            <h1>Detail {props.match.params.id}</h1>
        </div>
    );
};

export default PostDetail;