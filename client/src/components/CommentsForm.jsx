import "../assets/styles/commentsForm.css";
import { useState } from "react";

export default function Comments(props) {
   const [commentInfo, setCommentInfo] = useState({
      name: "",
      email: "",
      website: "",
      comment: "",
      postID: props.postID
   });

   const handleInput = (event) => {
      setCommentInfo((prevFormData) => {
         return {
            ...prevFormData,
            [event.target.name]: event.target.value,
         };
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      fetch("https://sp-church-backend-0567e0d19c57.herokuapp.com/data/comment", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(commentInfo),
      })
         .then(() => {
            console.log("new blog added");
         })
         .catch((err) => console.error("Error:", err));
   };

   return (
      <div className="comment--container">
         <div className="comment-text">
            <h1 className="comment--title">답글 남기기</h1>
            <h2 className="comment--info">
               이메일 주소는 공개되지 않습니다. 필수 필드는 *로 표시됩니다
            </h2>
            <h2></h2>
         </div>

         <form className="comment--form" method="POST" onSubmit={handleSubmit}>
            <p>댓글 *</p>
            <textarea
               className="comment--body--input"
               type="text"
               name="comment"
               value={commentInfo.comment}
               onChange={handleInput}
            />

            <div className="comment--name">
               <label>이름 * </label>
               <input
                  type="text"
                  name="name"
                  value={commentInfo.name}
                  onChange={handleInput}
               />
            </div>
            <div className="comment--email">
               <label>이메일 *</label>
               <input
                  type="text"
                  name="email"
                  value={commentInfo.email}
                  onChange={handleInput}
               />
            </div>
            <div className="comment--website">
               <label>웹사이트</label>
               <input
                  type="text"
                  name="website"
                  value={commentInfo.website}
                  onChange={handleInput}
               />
            </div>

            <button className="comment--submit" type="submit">
               댓글 달기
            </button>
         </form>
         

      </div>
   );
}