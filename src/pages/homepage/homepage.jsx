import React from "react";

import Hero from "../../components/hero/hero";
import CardList from "../../components/card-list/card-list";
import posts from "../../data/posts";

import "./homepage.scss";

const HomePage = () => (
  <div>
    <Hero />
    <div className="container">
      <CardList posts={posts} />
    </div>
  </div>
);

export default HomePage;
