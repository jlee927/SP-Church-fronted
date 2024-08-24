import LatestComments from "./LatestComments";
import LatestPost from "../components/LatestPost";

export default function RecentContent() {
   return (
      <div>
         <h1>최신 글</h1>
         <LatestPost />

         <h1>최신 댓글</h1>
         <LatestComments />
      </div>
   );
}
