import React from 'react';

class Comment extends React.Component {

    render (){
        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-header">{this.props.body}</p>
                <div className="comment-footer">
                    <a href="/" className="comment-footer-delete">Delete comment</a>
                </div>
            </div>
        );
    }
}

export default Comment;