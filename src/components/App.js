import React, { Component } from "react";
import classnames from 'classnames';

import CommentBox from './CommentBox';
import CommentContainer from "./CommentContainer";
import { toggleShowReplies } from '../util'

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: "",
      isEditing: false,
      data: props.data,
      value: 'um its not editing',
      replyMessage: '',
      activeReplyIndex: null
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleEdit = this._handleEdit.bind(this);

    this._handleReplyChange = this._handleReplyChange.bind(this);
    this._handleReplyCancel = this._handleReplyCancel.bind(this);
    this._handleToggleReplies = this._handleToggleReplies.bind(this);
    this._handleSubmitReplies = this._handleSubmitReplies.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(props) {
    this.scrollToBottom();
  }

  _handleSubmit(e) {
    e.preventDefault();
    const newData = this.state.data;
    const newComment = {
      // I will need to handle the concept of users, right now we preload the users
      // in the data but we should have safe guards so that only users who own comments
      // have access to editing them.
      name: "newly submitted comment",
      message: this.state.currentMessage,
      time: Date.now(),
      replies: []
    };

    newData.push(newComment);
    this.setState({
      data: newData,
      currentMessage: ''
    });
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({
      currentMessage: e.target.value
    });
  }

  _handleCancel() {
    this.setState({
      currentMessage: ""
    });
  }

  _handleUpdate(e) {
    e.preventDefault();
    const { data, index, currentMessage } = this.state;
    const newData = data;
    const newDataObj = {
      ...newData[index],
      message: currentMessage
    };
    newData[index] = newDataObj;

    this.setState({
      isEditing: false,
      data: newData,
      currentMessage: ''
    });
  }

  _handleRemove(passedIndex) {
    const updatedData = this.state.data.filter(
      (elem, index) => index !== passedIndex
    );
    this.setState({
      data: updatedData
    });
  }

  _handleEdit(index) {
    const commentData = this.state.data[index];
    this.setState({
      isEditing: !this.state.isEditing,
      currentMessage: commentData.message,
      index
    });
  }

  _handleReplyChange(e) {
    e.preventDefault();
    this.setState({
      replyMessage: e.target.value
    });
  }

  _handleReplyCancel() {
    this.setState({
      replyMessage: ""
    });
  }

  _handleSubmitReplies(e) {
    e.preventDefault()

    const { activeReplyIndex, data, replyMessage } = this.state;

    const newData = data;
    const replies = data[activeReplyIndex].replies
    const message = {
      message: replyMessage,
      name: 'user not defined yet',
      time: Date.now()
    }

    replies.push(message)

    const newDataObj = {
      ...newData[activeReplyIndex],
      replies,
      showReplies: false,
    };
    newData[activeReplyIndex] = newDataObj;

    this.setState({
      data: newData,
      replyMessage: ''
    })
  }

  _handleToggleReplies(index) {
    const { data, activeReplyIndex } = this.state;
    let newData = data
    if (!!activeReplyIndex && index !== activeReplyIndex) {
      newData = toggleShowReplies({ data, index: activeReplyIndex })
    }
    newData = toggleShowReplies({ data: newData, index })
    this.setState({
      data: newData,
      activeReplyIndex: index
    });
  }

  render() {
    const { data, isEditing, currentMessage, replyMessage } = this.state;
    return (
      <div className="App" style={{
        "marginBottom": "275px"
      }}>
        {data.map((user, index) => (
          <CommentContainer
            key={index}
            user={user}
            index={index}
            showReplies={data[index].showReplies}
            handleEdit={this._handleEdit}
            handleRemove={this._handleRemove}
            handleReplyChange={this._handleReplyChange}
            handleReplyCancel={this._handleReplyCancel}
            replyMessage={replyMessage}
            handleToggleReplies={this._handleToggleReplies}
            handleSubmitReplies={this._handleSubmitReplies}
            replyCount={data[index].replies.length}
          />
        ))}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        <div className={classnames({ "add-comment-section": true, editingComment: isEditing })}>
          <CommentBox
            currentMessage={currentMessage}
            isEditing={isEditing}
            addCommentSection
            handleChange={this._handleChange}
            handleSubmit={this._handleSubmit}
            handleCancel={this._handleCancel}
            handleUpdate={this._handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App
