import "../assets/styles/sermon.css";
import SermonEntry from "./SermonEntry";
import { useEffect, useState } from "react";

export default function Sermon(props) {
   const [sermonData, setSermonData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `https://sp-church-backend-ea0d64353b32.herokuapp.com/contentful/all-sermon-announcement/${props.blogType}`
            );

            if (!res.ok) {
               throw new Error("Network was not okay");
            }

            const result = await res.json();
            setSermonData(result);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   //    console.log(sermonData);

   const renderedSermonData = sermonData.map((sermon, key) => {
      return (
         <SermonEntry
            key={key}
            title={sermon.title}
            video={sermon.video}
            description={sermon.description}
            entryKey={sermon.id}
            createdDate={sermon.createdDate}
         />
      );
   });
   return (
      <div className="sermon--container">
         <h1 className="sermon--category">
            <span>[카테고리:] {props.category}</span>
         </h1>
         {renderedSermonData}
      </div>
   );
}
