import React from "react";
import classnames from 'classnames';
import '../styles/App.css'
import '../styles/CommentBox.css'

// Component that handles the creation of new comments
const CommentBox = ({
  currentMessage,
  isEditing,
  handleChange,
  handleSubmit,
  handleUpdate,
  handleCancel,
  addCommentSection,
  reply
}) => {
  return (
    <div className="container">
      <input className="textBox" onChange={handleChange} value={currentMessage} />
      <div className="addCommentContainer">
        {
          isEditing ? (
            <button
              className={classnames({
                primaryButton: true, addCommentButton: addCommentSection
              })}
              onClick={handleUpdate}>Update</button>
          ) : (
              <button
                className={classnames({
                  primaryButton: true, addCommentButton: addCommentSection
                })}
                onClick={handleSubmit}>{reply ? 'Reply' : 'Add comment'}</button>
            )}
        <button className="primaryButton" onClick={handleCancel}>Cancel</button>
      </div>
    </div >
  )
}


export default CommentBox