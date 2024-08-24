import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestComments() {
   const apiUrl = import.meta.env.VITE_API_BASE_URL;
   const [recentComments, setRecentComments] = useState([{}]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`${apiUrl}/data/recent-comments`);
            if (!res.ok) {
               throw new Error("Network response was not okay");
            }
            const result = await res.json();
            setRecentComments(result);
         } catch (err) {
            console.log(err);
         }
      };

      fetchData();
   }, []);

   const renderedComments = recentComments.map((comment, key) => {
      const linkUrl = `/sermon/${comment.postID}`;
      return (
         <li key={key}>
            <Link to={linkUrl}>
               {comment.name} - date placeholder
            </Link>
         </li>
      );
   });

   //    console.log(recentComments);
   return (
      <div>
         <h1>test</h1>
         <ul>{renderedComments}</ul>
      </div>
   );
}
