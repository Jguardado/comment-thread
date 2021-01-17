import React from 'react';
import CommentBox from './CommentBox';
import MessageContent from './MessageContent';
import '../styles/ReplySection.css';

export default ({
  user,
  addingReply,
  currentMessage,
  isEditing,
  handleSubmitReplies,
  handleChange,
  handleCancel
}) => {
  if (!isEditing) {
    isEditing = false
  }

  return (
    <div className='replySectionFlex'>
      <div className='replySectionContainer'>
        {user.replies.map((reply, index) => (
          <div className="replyMessageContent">
            <MessageContent key={index} user={reply} />
          </div>

        ))
        }
        {addingReply &&
          <div style={{ 'paddingTop': '24px' }}>
            <CommentBox
              currentMessage={currentMessage}
              isEditing={isEditing}
              reply
              handleChange={handleChange}
              handleSubmit={handleSubmitReplies}
              handleCancel={handleCancel}
            />
          </div>
        }
      </div>
    </div >
  )
}