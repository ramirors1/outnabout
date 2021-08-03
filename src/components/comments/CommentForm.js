import React, { useContext, useState } from "react"
import { CommentContext } from "./CommentProvider"
// import "./Comment.css"
import { useHistory } from 'react-router-dom';

export const CommentForm = () => {
  const { addComment } = useContext(CommentContext)
  const history = useHistory()

  const [comment, setComment] = useState({
    comment: "",
    userId: 0
  })

  const handleControlledInputChange = (c) => {
    const newComment = { ...comment }
    newComment[c.target.id] = c.target.value
    console.log(c.target.value)
    setComment(newCommnet)
  }

  const handleClickSaveComment = (c) => {
    c.preventDefault() //Prevents the browser from submitting the form

    const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))

      const newComment = {
        comment: comment.comment,
        userId: currentUserId
      }
      addComment(newComment)
      .then(() => history.push("/comments"))
    }
  
  return (
    <form className="commentForm">
      <h2 className="commentForm__title">Add Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <input type="text" id="comment" required autoFocus className="form-control" placeholder="Comment" value={comment.comment} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveComment}>
        Submit Comment 
          </button>
                      
    </form>
  )
}  
