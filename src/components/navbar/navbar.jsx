import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Fourier } from "./Fourier Vector.svg";

import "./navbar.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({
      scrolled: window.pageYOffset > 300,
    });
  };
  render() {
    return (
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div
          className="mid-title"
          style={{
            backgroundColor: this.state.scrolled ? "black" : "transparent",
          }}
        >
          <Fourier />
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="home">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
