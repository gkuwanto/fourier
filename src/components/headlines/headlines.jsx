import React from "react";
import "./headlines.scss";

const Headline = () => (
  <div className="headline-list">
    <div className="headline">
      <div className="headline-card active">
        <img
          alt="headline"
          src="https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        />
        <div className="right">
          <h2 className="headline-title">Headline Title</h2>
          <p className="headline-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            delectus ut quia quaerat, illo sequi sint assumenda corporis!
            Voluptates exercitationem quaerat, amet labore eos nobis rem illo
            quae inventore porro mollitia animi officia assumenda fuga adipisci
            maiores, deleniti hic quas velit? Aliquid, est sapiente earum itaque
            libero perspiciatis neque odio.{" "}
          </p>
          <a href="#aa">Read More</a>
        </div>
      </div>
    </div>

    <div className="headline-card">
      <img
        alt="headline"
        src="https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      />
      <div className="right">
        <h2 className="headline-title">Headline Title</h2>
        <p className="headline-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          delectus ut quia quaerat, illo sequi sint assumenda corporis!
          Voluptates exercitationem quaerat, amet labore eos nobis rem illo quae
          inventore porro mollitia animi officia assumenda fuga adipisci
          maiores, deleniti hic quas velit? Aliquid, est sapiente earum itaque
          libero perspiciatis neque odio.{" "}
        </p>
        <a href="#aa">Read More</a>
      </div>
    </div>
  </div>
);

export default Headline;
