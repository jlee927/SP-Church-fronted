import "../assets/styles/sermon.css";
import RenderSermon from "../components/RenderSermon";

export default function Sermon() {
   return (
      <div>
         <RenderSermon blogType="sermon" category="설교" />
      </div>
   );
}
