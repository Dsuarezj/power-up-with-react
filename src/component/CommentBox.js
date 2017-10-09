import React from 'react';
import Comment from "./Comment";


class CommentBox extends React.Component{
    render(){
        return(
          <div className="comment-box">
              <h3>Comments</h3>
              <h4 className="comment-count"> 2 comments</h4>
              <div className="comment-list">
                  <Comment author="Anonimo 1" body="primer comentario"/>
                  <Comment author="Anonimo 2" body="segundo comentario"/>
              </div>
          </div>
        );
    }
}

export default CommentBox;