import "../assets/styles/sermon.css";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";

export default function SermonFullPost() {
   const { id } = useParams();
   const location = useLocation();
   const props = location.state;
   console.log(props);

   const isNumberedList =
      props.description && /^\d+\.\s+/.test(props.description);
   let renderedContent;

   // Check if props.description exists and is not undefined
   if (props.description) {
      if (isNumberedList) {
         // Split the text into an array of list items
         const items = props.description.split(/\d+\.\s+/).filter(Boolean);

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
         const paragraphs = props.description.split("\n\n");

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
      // If props.description is undefined, render a placeholder or message
      renderedContent = <p>Loading content...</p>;
   }

   return (
      <div className="sermon--entry--container">

         <div className="sermon--entry--body">
            <h1 className="sermon--title">{props.title}</h1>

            <h3 className="sermon--posted">
               작성일자{" "}
               <span>
                  {props.createdDate.month}월 {props.createdDate.day},{" "}
                  {props.createdDate.year}
               </span>
            </h3>

            {props.video !== "n/a" && (
               <div className="player--wrapper">
                  <ReactPlayer
                     className="react--player"
                     url={props.video}
                  ></ReactPlayer>
               </div>
            )}
            {renderedContent}
         </div>
         <Comments postID={id} />
         <CommentsForm postID={id} />
      </div>
   );
}
