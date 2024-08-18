import { Link } from "react-router-dom";

export default function SermonEntry(props) {
   return (
      <div className="sermon--body">
         <Link
            className="sermon--title"
            to={{
               pathname: `/sermon/${props.entryKey}`,
            }}
            state={{
               title: props.title,
               video: props.video,
               description: props.description,
               entryKey: props.entryKey,
               createdDate: props.createdDate,
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

         {/* <p className="sermon--description">{props.description}</p> */}
         <br></br>
      </div>
   );
}
