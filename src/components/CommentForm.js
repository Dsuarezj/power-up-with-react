import React from "react";

class CommentForm extends React.Component {

    constructor() {
        super();
        this.state = {
            characters: 0
        }
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join discussion</label>
                <div className="comment-form-fields">
                    <input type="text" placeholder="Name" ref={(input) => this._author = input}/>
                    <textarea placeholder="Comment"
                              ref={(input) => this._body = input}
                              onChange={this._getCharacterCount.bind(this)}
                    ></textarea>
                </div>
                <p>{this.state.characters} characters</p>
                <div className="comment-form-button">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        )
    }

    _getCharacterCount() {
        this.setState({characters: this._body.value.length})
    }

    _handleSubmit(event) {
        event.preventDefault(); //Prevent page to reloding when the submit button was press
        if (!this._author.value || !this._body.value){
            alert ("Please enter your name and comment");
            return;
        }
        let author = this._author;
        let body = this._body;
        this.props.addComment(author.value, body.value);
        this._author.value = '';
        this._body.value = '';
        this.setState({characters: 0});
    }
}


export default CommentForm;