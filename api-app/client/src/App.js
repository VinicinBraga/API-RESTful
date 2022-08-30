import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import Feed from "./pages/Feed/feed";
import Details from "./pages/Details/details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
