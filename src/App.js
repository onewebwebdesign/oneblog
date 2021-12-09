import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import React from "react";

import Navigation from "./components/Navigation";

const App = (props) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navigation />
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="articles" element={<Articles />} />
          </Routes>
        </section>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;
