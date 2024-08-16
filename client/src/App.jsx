import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import NewsEntryFullPost from "./components/NewsEntryFullPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsEntryFullPost />} />
         </Routes>
         <Footer/> 
      </Router>
   );
}

export default App;
