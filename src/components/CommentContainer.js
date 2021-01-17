import React from 'react';
import classnames from 'classnames';

import MessageContent from './MessageContent';
import ReplySection from './ReplySection';
import '../styles/CommentContainer.css';


const CommentContainer = ({
  index,
  showReplies,
  user,
  handleEdit,
  handleRemove,
  handleToggleReplies,
  handleSubmitReplies,
  handleReplyChange,
  handleReplyCancel,
  replyMessage,
  replyCount
}) => {
  return (
    <div className="commentContainerBorder">
      <div className='flex'>
        <div className="userImageContainer">
          <img className="userImage" src="https://i.pravatar.cc/150" />
        </div>

        <div className="messageContainer">
          <MessageContent user={user} />
          <div className="btnContainer">
            <div className="replyCount">{`${replyCount} replies`}</div>
            <div className={classnames({ replyButtons: true })}>
              <button className="secondaryButton" onClick={() => handleEdit(index)}>edit</button>
              <button className={classnames({ secondaryButton: true, leftMargin: true })} onClick={() => handleRemove(index)}>remove</button>
              <button className={classnames({ secondaryButton: true, leftMargin: true })} onClick={() => handleToggleReplies(index)}>show replies</button>
            </div>
          </div>
        </div>
      </div>
      {
        showReplies && <ReplySection
          user={user}
          addingReply
          currentMessage={replyMessage}
          handleChange={handleReplyChange}
          handleCancel={handleReplyCancel}
          handleSubmitReplies={handleSubmitReplies}
        />
      }
    </div >
  );
}

export default CommentContainer;