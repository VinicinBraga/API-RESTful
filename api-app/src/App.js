import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./components/pages/post";
import Edit from "./components/pages/edit";
import Feed from "./components/pages/feed";
import Details from "./components/pages/details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
