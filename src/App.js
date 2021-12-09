import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Articles from "./pages/Articles";
import NewArticle from "./pages/NewArticle";
import UserArticles from "./pages/UserArticles";
import React from "react";

import Navigation from "./components/layout/navigation/Navigation";

const App = (props) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navigation />
        <section>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/articles" exact element={<Articles />} />
            <Route path="/articles/new" exact element={<NewArticle />} />
            <Route path="/:userId/articles" exact element={<UserArticles />} />
            <Route path="/users" exact element={<Users />} />
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
