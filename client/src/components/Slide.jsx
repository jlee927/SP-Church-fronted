import "../assets/styles/slideshow.css";
import ReactPlayer from "react-player";

export default function Slide(props) {
   return (
      <div>
         {props.isVideo ? (
            <div className="myVideo fade">
               <ReactPlayer
                  className="react-player"
                  url={props.contentUrl}
                  width="100%"
                  height="100%"
               />
            </div>
         ) : (
            <div className="mySlides fade">
               <img
                  className="slide--image"
                  src={props.contentUrl}
                  alt={props.name}
               />
            </div>
         )}
      </div>
   );
}
