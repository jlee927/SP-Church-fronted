import { Link } from "react-router-dom";

export default function SermonEntry(props) {
   return (
      <div className="sermon--body">
         <Link
            className="sermon--title"
            to={{
               pathname: `/sermon/${props.entryKey}`,
            }}
         >
            {props.title}
         </Link>
         <h3 className="sermon--posted">
            작성일자{" "}
            <span>
               {props.createdDate.month}월 {props.createdDate.day},{" "}
               {props.createdDate.year}
            </span>
         </h3>

         <Link
            className="sermon--leave--comment"
            to={{
               pathname: `/sermon/${props.entryKey}`,
            }}
         >
            댓글 남기기
         </Link>
         <br></br>
         <br></br>
         {/* <p className="sermon--description">{props.description}</p> */}
      </div>
   );
}
