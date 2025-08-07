import "./index.css";

// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa"; // Social media icons
import { GoTriangleDown } from "react-icons/go"; //Down arrow icon

import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="banner-container">
        <div className="banner-content">
          <p className="greeting">Hello</p>
          <h1 className="name">I'm Sudhakar</h1>
          <p className="role">MERN Full Stack Web Developer</p>
          <div className="home-buttons-card">
            <button type="button" className="more-about-btn">
              MORE ABOUT ME
            </button>
            <button type="button" className="get-in-touch-btn">
              GET IN TOUCH
            </button>
          </div>
        </div>
        <div className="get-my-cv-sm-container">
          <div className="horizontal-line"></div>
          <button type="button" className="get-my-cv-btn">
            GET MY CV
          </button>
        </div>
        <div className="banner-image">
          <div className="get-my-cv-lg-container">
            <div className="horizontal-lg-line"></div>
            <button type="button" className="get-my-cv-btn">
              GET MY CV
            </button>
          </div>

          <div className="banner-social-icons">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="social-icon" />
            </a>
            <div className="vertical-line"></div>
            <button type="button" className="circle-btn">
              <GoTriangleDown className="down-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
