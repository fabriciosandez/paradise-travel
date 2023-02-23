import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import Search from "./components/Search";
import Selection from "./components/Selection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Places/>
      <Search/>
      <Selection/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
