import "../assets/styles/slideshow.css";
import Dot from "./Dot";
import Slide from "./Slide";
import { useEffect, useState } from "react";

export default function Slideshow() {
   const [currImage, setCurrImage] = useState(0);
   const [dataAPI, setDataApi] = useState([{}]);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(
               "https://sp-church-backend-0567e0d19c57.herokuapp.com/contentful/slideshow"
            ); // Adjust the URL as needed
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setDataApi(result);
         } catch (error) {
            setError(error.message);
         }
      };

      fetchData();
   }, []);

   // console.log(dataAPI);

   function handleDots(dotKey) {
      setCurrImage(dotKey);
   }

   function handleNext() {
      console.log("Next Test");

      if (currImage === dataAPI.length - 1) {
         setCurrImage(0);
      } else {
         setCurrImage(currImage + 1);
      }
   }

   function handlePrev() {
      console.log("Prev Test");
      if (currImage === 0) {
         setCurrImage(dataAPI.length - 1);
      } else {
         setCurrImage(currImage - 1);
      }
   }

   return (
      <div>
         <div className="slideshow-container">
            <Slide
               isVideo={dataAPI[currImage].isVideo}
               contentUrl={dataAPI[currImage].url}
            />

            <div className="arrow--container">
               <a onClick={handlePrev} className="prev">
                  &#10094;
               </a>
               <a onClick={handleNext} className="next">
                  &#10095;
               </a>
            </div>
         </div>

         <div className="dots--circles">
            <Dot
               numDots={dataAPI.length}
               currIndex={currImage}
               handleClick={handleDots}
            />
         </div>
      </div>
   );
}
