import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostCard from "../PostCard/PostCard";

class PostList extends Component {
    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                let updatedPosts = data.splice(0, 5);
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => console.log("Oops Error: " + err))
    }
    componentWillUnmount = () => {
    //   console.log("Unmounted");
    }
    
    render() {
        return (
            <div>
                {/* <p>{this.props.isPaginated}</p> */}
                {this.state.posts.map(post => 
                    <Link to={`${this.props.match.url}/${post.id}`} key={post.id}>
                        <PostCard post={post} />
                    </Link>
                )}
            </div>
        )
    }
}

export default PostList;