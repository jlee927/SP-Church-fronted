import "../assets/styles/sermon.css";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SermonFullPost() {
   const { id } = useParams();
   const apiUrl = import.meta.env.VITE_API_BASE_URL;

   const [pageData, setPageData] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `${apiUrl}/contentful/single-sermon/${id}`
            );

            if (!res.ok) {
               throw new Error("Network was not okay");
            }

            const result = await res.json();
            setPageData(result);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   // console.log(pageData);

   const isNumberedList =
      pageData.description && /^\d+\.\s+/.test(pageData.description);
   let renderedContent;

   // Check if pageData.description exists and is not undefined
   if (pageData.description) {
      if (isNumberedList) {
         // Split the text into an array of list items
         const items = pageData.description.split(/\d+\.\s+/).filter(Boolean);

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
         const paragraphs = pageData.description.split("\n\n");

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
      // If pageData.description is undefined, render a placeholder or message
      renderedContent = <p>Loading content...</p>;
   }
   // console.log(pageData.createdDate);
   // const month = pageData.createdDate.month;
   const createdDate = pageData.createdDate || {};
   const month = createdDate.month || "Unknown month";
   const day = createdDate.day || "Unknown day";
   const year = createdDate.year || "Unknown year";
   return (
      <div className="sermon--entry--container">
         <div className="sermon--entry--body">
            <h1 className="sermon--title">{pageData.title}</h1>

            <h3 className="sermon--posted">
               작성일자{" "}
               <span>
                  {month}월 {day}, {year}
               </span>
            </h3>

            {pageData.video !== "n/a" && (
               <div className="player--wrapper">
                  <ReactPlayer
                     className="react--player"
                     url={pageData.video}
                     controls
                  ></ReactPlayer>
               </div>
            )}
            {renderedContent}
         </div>
         <Comments postID={pageData.id} />
         <CommentsForm postID={pageData.id} />
      </div>
   );
}
