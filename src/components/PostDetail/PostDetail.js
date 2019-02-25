import React from 'react';

import "./PostDetail.css";

const PostDetail = (props) => {
    const { post } = props;
    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetail;