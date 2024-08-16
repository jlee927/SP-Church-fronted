import "../assets/styles/news.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NewsEntry(props) {
   return (
      <div className="news--body">
         <Link className="entry--date"
            to={{
               pathname: `/news/${props.entryKey}`,
            }}
            state={props.dateCreated}   
         >
            {props.dateAnnouncement.month}월 {props.dateAnnouncement.day}일
         </Link>
         <h3 className="entry--posted">
            작성일자{" "}
            <span>
               {props.dateCreated.month}월 {props.dateCreated.day},{" "}
               {props.dateCreated.year}
            </span>
         </h3>
         <p className="entry--body">{props.body}</p>

         {/* implement this one day */}
         {/* <h3 className="entry--category">
            카테고리 교회 소식. 고유주소 북마크.
            </h3> */}
         <br></br>
      </div>
   );
}
