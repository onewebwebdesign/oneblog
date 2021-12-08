import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import React from "react";

const App = (props) => {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/articles">Articles</Link>
        </nav>
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="articles" element={<Articles />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
