import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Utilities/Header/Header";
import Home from "./Pages/Home/HomeMain/HomeMain";
import HomeTwo from "./Pages/Home/HomeTwo/HomeTwo";
import HomeThree from "./Pages/Home/HomeThree/HomeThree";
import Footer from "./Utilities/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Gallery from "./Pages/Gallery/Gallery";
import Teams from "./Pages/Team/Team";
import Faqs from "./Pages/Faq/Faq";
import Games from "./Pages/Games/Games";
import Matchese from "./Pages/Matchese/Matchese";
import MatcheseDetails from "./Pages/MatcheseDetails/MatcheseDetails";
import LiveStreaming from "./Pages/LiveStreaming/LiveStreaming";
import Error404 from "./Pages/404";
import BlogPost from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SinglePost from "./Pages/SinglePost/SinglePost";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/game" element={<Games />} />
          <Route path="/matchese" element={<Matchese />} />
          <Route path="/matchese-details" element={<MatcheseDetails />} />
          <Route path="/live-streaming" element={<LiveStreaming />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
