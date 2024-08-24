import SermonFullPost from "./SermonFullPost";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestPost() {
   const [recentPosts, setRecentPosts] = useState([]);

   const apiUrl = import.meta.env.VITE_API_BASE_URL;
   // console.log(apiUrl);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `${apiUrl}/contentful/recent-posts`
            );
            if (!res.ok) {
               throw new Error("Network response was not okay");
            }
            const result = await res.json();
            setRecentPosts(result.items);
         } catch (err) {
            console.log(err);
         }
      };

      fetchData();
   }, []);

   // console.log(recentPosts);
   //    console.log(recentPosts.fields)

   //    if (!recentPosts.length) {
   //     return <div>Loading...</div>;
   //  }

   const renderedList = recentPosts.map((item, key) => {
      const linkUrl =
         item.sys.contentType.sys.id === "churchNews"
            ? `/news/${item.sys.id}`
            : `/sermon/${item.sys.id}`;
      //   console.log(linkUrl);
      return (
         <li key={key}>
            <Link to={linkUrl}>
               {item.fields.title} and Link is: {linkUrl}
            </Link>
         </li>
      );
   });
   return (
      <div>
         <ul>{renderedList}</ul>
      </div>
   );
}
