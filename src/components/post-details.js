import React, { Component } from 'react';
import { fetchPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostDeatils extends Component {
    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeletePostClick() {
        let { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        let { post } = this.props;

        if(!post) {
            return (
                <section>
                    <h1>Post Details</h1>
                    <h2>Loading...</h2>
                </section>
            )
        }

        return (
            <section>
                <h1>Post Details</h1>
                <h2>{post.title}</h2>
                <h3>{post.categories}</h3>
                <p>{post.content}</p>
                <div className="text-center">
                    <Link to="/" className="btn btn-warning font-weight-bold">
                        Back to All Posts
                    </Link>
                    <button onClick={this.onDeletePostClick.bind(this)} className="btn btn-danger font-weight-bold ml-3">
                        Delete Post
                    </button>
                </div>
            </section>
        )
    }
}

function mapStateToProps( { posts }, ownProps ) {
   return {
       post: posts[ownProps.match.params.id]
   }; 
}

export default connect( mapStateToProps, { fetchPost, deletePost } )(PostDeatils);