import "../assets/styles/news-full-post.css";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import parseDate from "../../parseDate";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function NewsEntryFullPost() {
   const { id } = useParams();
   const location = useLocation();
   const dateCreated = location.state || {};

   // console.log(location);

   const [dataAPI, setDataAPI] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `https://sp-church-backend-0567e0d19c57.herokuapp.com/contentful/single-news-announcement/${id}`
            );
            if (!res.ok) {
               throw new Error("Network response was not okay");
            }
            const result = await res.json();
            setDataAPI(result);
         } catch (error) {
            console.error(error); // Log error for debugging
         }
      };

      fetchData();
   }, []);


   const isNumberedList = dataAPI.body && /^\d+\.\s+/.test(dataAPI.body);
   let renderedContent;

   // Check if dataAPI.body exists and is not undefined
   if (dataAPI.body) {
      if (isNumberedList) {
         // Split the text into an array of list items
         const items = dataAPI.body.split(/\d+\.\s+/).filter(Boolean);

         // Store the list in the variable
         renderedContent = (
            <div className="entry--full--body">
               <ol>
                  {items.map((item, index) => (
                     <li key={index}>{item.trim()}</li>
                  ))}
               </ol>
            </div>
         );
      } else {
         // Handle the \n\n line breaks
         const paragraphs = dataAPI.body.split("\n\n");

         // Store the paragraphs in the variable
         renderedContent = (
            <div className="entry--full--body">
               {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
               ))}
            </div>
         );
      }
   } else {
      // If dataAPI.body is undefined, render a placeholder or message
      renderedContent = <p>Loading content...</p>;
   }

   // console.log(dataAPI);
   const announcementDate = parseDate(dataAPI.announcementDate);
   return (
      <div className="news--full--container">
         <div className="news--full--body">
            <h1 className="entry--full--date">
               {announcementDate.month}월 {announcementDate.day}일
            </h1>

            {dateCreated ? (
               <h3 className="entry--full--posted">
                  작성일자
                  <span>
                     {" "}
                     {dateCreated.month}월 {dateCreated.day}, {dateCreated.year}
                  </span>
               </h3>
            ) : (
               <h3>No date available</h3>
            )}

            {renderedContent}
         </div>
         <Comments postID={id} />
         <CommentsForm postID={id} />
      </div>
   );
}
