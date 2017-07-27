import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea cols="30" rows="10"
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}></textarea>
        <button action="submit">Submit comment</button>
      </form>
    );
  }
}

export default connect()(CommentBox);
