import "../assets/styles/news.css";
import RecentContent from "../components/RecentContent";
import RenderNews from "../components/RenderNews";

export default function DailyBible() {
   return (
      <div>
         <RenderNews newsType="dailyBible" category="매일성경" />

         {/* <RecentContent /> */}
      </div>
   );
}
