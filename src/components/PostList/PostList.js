import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostCard from "../PostCard/PostCard";

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
        // this.setState({
        //     selectedPost: post
        // })
        // this.props.history.push("/about");
    }

    render() {
        return (
            <div>
                {/* <p>{this.props.isPaginated}</p> */}
                {this.state.posts.map(post => 
                    <Link to={`${this.props.match.url}/${post.id}`} key={post.id}>
                        <PostCard post={post} clicked={this.postClicked} />
                    </Link>
                )}
            </div>
        )
    }
}

export default PostList;