import React from "react";
import Card from "../card/card";

import "./card-list.scss";

const CardList = ({ posts }) => (
  <div className="card-list">
    {posts.map((post) => (
      <Card
        key={post.id}
        summary={post.summary}
        title={post.title}
        image={post.image}
        link={post.link}
      />
    ))}
  </div>
);

export default CardList;
