import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        });
    }

    render() {     
        return (
            <section>
                <div className="clearfix">
                    <h1 className="float-left">Posts</h1>
                    <Link className="btn btn-warning font-weight-bold float-right mt-2" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect( mapStateToProps, {fetchPosts} )(PostsIndex);