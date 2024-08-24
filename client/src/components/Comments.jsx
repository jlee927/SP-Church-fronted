import "../assets/styles/comments.css";
import commentProfile from "../images/comment-profile.png";
import parseDate from "../../parseDate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comments() {
   const [commentsData, setCommentsData] = useState([]);
   const apiUrl = import.meta.env.VITE_API_BASE_URL;

   const { id } = useParams();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `${apiUrl}/data/get-comments/${id}`
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

   // console.log(commentsData);

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
   if (commentsData.length > 0) {
      return (
         <div className="comment--section--container">
            <h1 className="comment--section--head">
               에 대한 {commentsData.length}개의 생각
            </h1>
            {newData}
         </div>
      );
   }
}
