import "../assets/styles/news.css";import NewsEntry from "../components/NewsEntry";
import RenderNews from "../components/RenderNews";

export default function News() {
   return(
      <RenderNews newsType="churchNews" category="교회 소식" />
   ) 
}
