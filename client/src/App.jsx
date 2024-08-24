import "./App.css";
import DailyBible from "./pages/DailyBible";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import NewsEntryFullPost from "./components/NewsEntryFullPost";
import OtherSermon from "./pages/OtherSermon";
import Sermon from "./pages/Sermon";
import SermonFullPost from "./components/SermonFullPost";
import SundaySermon from "./pages/SundaySermon";
import WednesdaySermon from "./pages/WednesdaySermon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
     <Router>
       <div className="app-container">
         <Navbar />
         <main>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/news" element={<News />} />
             <Route path="/news/:id" element={<NewsEntryFullPost />} />
             <Route path="/sermon" element={<Sermon />} />
             <Route path="/sermon/:id" element={<SermonFullPost />} />
             <Route path="/sunday-sermon" element={<SundaySermon />} />
             <Route path="/other-sermon" element={<OtherSermon />} />
             <Route path="/wednesday-sermon" element={<WednesdaySermon />} />
             <Route path="/daily-bible" element={<DailyBible />} />
           </Routes>
         </main>
         <Footer />
       </div>
     </Router>
   );
 }
 
 export default App;
 