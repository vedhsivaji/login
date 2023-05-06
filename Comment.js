import React, { useState } from "react";
import "./Comments.css";
// import { FaRegUserCircle } from "react-icons/fa";

function Comments  () {
    const [newComment, setNewComment] = useState([""]);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "May 6, 2023",
      text: "This is the first comment",
    },
    {
      id: 2,
      name: "Jane Doe",
      date: "May 7, 2023",
      text: "This is the second comment",
    },
  ]);


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newId = comments.length + 1;
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const newCommentObject = {
      id: newId,
      name: "New User",
      date: currentDate,
      text: newComment,
    };
    setComments([...comments, newCommentObject]);
    setNewComment("");
  };

  return (
    <div className="comments">
         {/* <form className="comment__form" onSubmit={handleCommentSubmit}>

        <div className="comment__form-group">
        <img
            src="https://jeffjbutler.com/wp-content/uploads/2018/01/default-user.png"
            alt="user avatar"
            className="comment__avatar"
          />
    <textarea
  name="commentText"
  id="comment-text"
  className="comment__form-control"
  rows="1"
  value={newComment}
  onChange={handleCommentChange}
  placeholder="Add a comment..."
>
</textarea>

  </div>
  <button type="submit" className="comment__btn-submit">
    Submit
  </button>
  </form> */}
      <h3 className="comments__heading"> {comments.length} Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img
            src="https://jeffjbutler.com/wp-content/uploads/2018/01/default-user.png"
            alt="user avatar"
            className="comment__avatar"
          />
          <div className="comment__content">
            <div className="comment__info">
              <span className="comment__name">{comment.name}</span>
              <span className="comment__date">{comment.date}</span>
            </div>
            <div className="comment__text">{comment.text}</div>
          </div>
        </div>
      ))}
      <form className="comment__form" onSubmit={handleCommentSubmit}>
      {/* <img
            src="https://jeffjbutler.com/wp-content/uploads/2018/01/default-user.png"
            alt="user avatar"
            className="comment__avatar"
          /> */}
  {/* <div className="comment__form-group">
    <label htmlFor="comment-name" className="comment__form-label">Name</label>
    {/* <input
      type="text"
      id="comment-name"
      className="comment__form-control"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    /> 
  </div> */}
  <div className="comment__form-group">
    <textarea
  name="commentText"
  id="comment-text"
  className="comment__form-control"
  rows="1"
  value={newComment}
  onChange={handleCommentChange}
  placeholder="Add a comment..."
>
</textarea>

  </div>
  <button type="submit" className="comment__btn-submit">
    Submit
  </button>
</form>
</div> )
}
export default Comments;


// CSS
.comments {
    padding: 30px;
  }
  
  .comments__heading {
    margin-bottom: 20px;
  }
  
  .comments__form {
    margin-bottom: 30px;
  }
  
  .comment {
    display: flex;
    margin-bottom: 20px;
  }
  
  .comment__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    font-size: 24px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 50%;
  }
  
  .comment__content {
    flex: 1;
  }
  
  .comment__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    color: #6c757d;
  }
  
  .comment__name {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .comment__text {
    font-size: 1rem;
    margin: 5px 0;
  }
  
  .comment__date {
    font-size: 0.8rem;
    margin-left: auto;
  }
  
  .comment__avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .comment__form {
    margin-top: 20px;
  }
  
  .comment__form textarea {
    width: 40%;
    border: none;
    border-bottom: 1px solid #ccc;
    resize: none;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .comment__form button {
   
    border: none;
    background-color: #3f51b5;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .comment__form button:hover {
    background-color: #303f9f;
  }
  
