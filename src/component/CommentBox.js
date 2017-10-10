import React from "react";
import Comment from "./Comment";


class CommentBox extends React.Component {
    render() {
        const comments = this._getComments() || [];
        const commentsTittle = this._getCommentsTittle(comments.length);
        return (
            <div className="comment-box">
                <h3>Comments</h3>
                {this._getPopularMessage(comments.length)}
                <h4 className="comment-count"> {commentsTittle}</h4>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

    _getComments() {
        const commentList = [
            {id: 1, author: 'Anonimo 101', body: 'primer comentario'},
            {id: 2, author: 'Anonimo 202', body: 'segundo comentario'},
            {id: 3, author: 'Anonimo 303', body: 'tercer comentario'}
        ];
        return commentList.map((comment) => {
            return (<Comment
                author={comment.author}
                body={comment.body}
                key={comment.id}/>); //Key helps react to keep track which element is which in the loop, is a good practice to pass a unique number for this key
        });
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
            return (
                <div>
                    This post is getting really popular, don't miss out!
                </div>
            );
        }
    }

    _getCommentsTittle(commentCount) {
        if (commentCount === 0) {
            return "No comments yet.";
        } else if (commentCount === 1) {
            return "1 comment";
        } else {
            return `${commentCount} comments`;
        }
    }

}

export default CommentBox;