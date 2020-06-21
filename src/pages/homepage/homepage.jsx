import React from "react";

import Hero from "../../components/hero/hero";
import CardList from "../../components/card-list/card-list";
import Headline from "../../components/headlines/headlines";
import posts from "../../data/posts";

import "./homepage.scss";

const HomePage = () => (
  <div>
    <Hero />
    <div className="container">
      <div className="bg">
        <Headline />
        <div className="cardlist">
          <CardList posts={posts} />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
