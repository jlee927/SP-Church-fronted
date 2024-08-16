import "../assets/styles/news.css";import NewsEntry from "../components/NewsEntry";
import { useEffect, useState } from "react";

export default function News() {
   const [dataAPI, setDataAPI] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               "https://sp-church-backend-0567e0d19c57.herokuapp.com/contentful/all-news-announcement"
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

   const allNewsEntries = dataAPI.map((newsEntry, key) => {
      return (
         <NewsEntry
            key={key}
            entryKey={newsEntry.id}
            body={newsEntry.body}
            dateCreated={newsEntry.createdDate}
            dateAnnouncement={newsEntry.announcementDate}
         />
      );
   });

   return (
      <div className="news--container">
         <h1 className="news--title">
            <span>[카테고리:] 교회 소식</span>
         </h1>

         {/* Check if dataAPI is not empty before rendering NewsEntry */}
         {dataAPI.length > 0 && allNewsEntries}
      </div>
   );
}
