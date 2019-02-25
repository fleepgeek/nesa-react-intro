import React, { Component } from "react";

import PostCard from "../PostCard/PostCard";
import PostDetail from "../PostDetail/PostDetail";

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: "How to Train your Dragon",
                content: "qrqrrqrf"
            },
            {
                id: 2,
                title: "Laura Ikeji Mocks Kanu",
                content: "eqwrqrq"
            },
            {
                id: 3,
                title: "New Video - Killing Dem by Zlatan",
                content: "ertgrwfd"
            },
        ],
        selectedPost: null
    }

    postClicked = (post) => {
        // console.log("Clicked", post);
        this.setState({
            selectedPost: post
        })
    }

    render() {
        let content = <p>Select a Post</p>;
        if(this.state.selectedPost !== null) {
            content = 
                <PostDetail post={this.state.selectedPost} />
        }
        return (
            <div>
                {/* <p>{this.props.isPaginated}</p> */}
                {this.state.posts.map(post => <PostCard key={post.id} post={post} clicked={this.postClicked} />)}
                {content}
            </div>
        )
    }
}

export default PostList;