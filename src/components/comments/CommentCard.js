import React, { useContext, useState, useEffect } from "react";
import { CommentContext } from "../comments/CommentProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Comment.css";

export const CommentCard = ({event}) => {
  const { comments, getComments, addEventComment, updateEventComment, getEventCommentById } =
    useContext(CommentContext);

  const [comment, setComment] = useState({
    eventId: 0,
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false); //? Enables and disables the button
  const { commentId } = useParams(); //* Is an object
  const history = useHistory();
  
  useEffect(() => {
    console.log("Use Effect For Comment is working!");
    if (commentId) {
      getEventCommentById(commentId).then((comment) => {
        setComment(comment);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);
  console.log(comment);

  const ChangeHandler = (e) => {
    const newComment = { ...comment };
    newComment[e.target.id] = e.target.value;
    console.log(newComment);
    setComment(newComment);
  };

  const SubmitHandler = () => {
    if (comment.comments === "") {
      window.alert(
        "Add comments in the text area to save content for this event."
      );
    } else {
      setIsLoading(true); //? Disables the button - no extra clicks
      if (commentId) {
        //!Put
        const upEventCommentObjs = {
          id: commentId,
          eventId: parseInt(comment.eventId),
          userId: parseInt(localStorage.getItem("afe_user")),
          content: comment.content,
        };
        updateEventComment(upEventCommentObjs).then(() =>
          //? 🤔
          getComments()          
        );
      } else {
        //!Add
        const newEventComment = {
          eventId: parseInt(event.id),
          userId: parseInt(localStorage.getItem("afe_user")),
          content: comment.content,
        };
        addEventComment(newEventComment).then(() => getComments()          
        );
      }
    }
  };
  return (
    <>
      <h6>Add Comment</h6>

      <form className="comments">
        <textarea
        //   id="comments"
          id="content"
          rows="9"
          cols="70"
          name="comment"
          form="usrform"
          onChange={ChangeHandler}
          defaultValue={comments.find(
            (comment) => comment.userId === parseInt(localStorage.getItem("afe_user"))
          ) ? ( comment.content
          ) : (
            "Enter comment..."
          )}
        >
        </textarea>
        <button
          type="submit"
          fill="solid"
          disabled={isLoading}
          onClick={(comment) => {
            comment.preventDefault();
            SubmitHandler();
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};
