import React from 'react';
import moment from 'moment';
import '../styles/CommentContainer.css';


export default ({ user }) => (
  <div className="messageContent">
    <div className="messageHeader">
      <span className="username">{user.name}</span>
      <span className="time">at {moment(user.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
    </div>
    <div className="message">{user.message}</div>
  </div>
)