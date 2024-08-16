import "../assets/styles/comments.css";
import commentProfile from "../images/comment-profile.png";
import parseDate from "../../parseDate";
import { useEffect, useState } from "react";

export default function Comments(props) {
   const [commentsData, setCommentsData] = useState([]);
   //    const { postID } = useParams();
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `https://sp-church-backend-0567e0d19c57.herokuapp.com/data/get-comments/${props.postID}`
            );
            if (!res.ok) {
               throw new Error("Network response was not okay");
            }
            const result = await res.json();
            setCommentsData(result);
            // console.log("Fetched!")
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   console.log(commentsData);

   const newData = commentsData.map((comment, key) => {
      const dateObject = parseDate(comment.createdAt);
      return (
         <div className="comment--user--container" key={key}>
            <div className="user">
               <div className="user--container">
                  <img className="user--image" src={commentProfile} />
                  <div className="user--name">
                     <strong>{comment.name}</strong> 댓글:
                  </div>
               </div>

               <div className="user--metadata">
                  <div className="user--time">
                     {dateObject.isMorning === true ? (
                        <div>
                           {dateObject.month}월 {dateObject.day},{" "}
                           {dateObject.year}, {dateObject.hours}:
                           {dateObject.minutes}오전
                        </div>
                     ) : (
                        <div>
                           {dateObject.month}월 {dateObject.day},{" "}
                           {dateObject.year}, {dateObject.hours}:
                           {dateObject.minutes}오후
                        </div>
                     )}
                  </div>
                  <button>응답</button>
               </div>
            </div>

            <p className="user--body">{comment.comment}</p>
         </div>
      );
   });
   return (
      <div className="comment--section--container">
         <h1 className="comment--section--head">에 대한 {commentsData.length}개의 생각</h1>
         {newData}
      </div>
   );
}
