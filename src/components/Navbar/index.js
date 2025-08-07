import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">My Portfolio</div>
      {/* Desktop menu */}
      <ul className="navbar-list">
        <li className="navbar-item">About</li>
        <li className="navbar-item">Projects</li>
        <li className="navbar-item">Contact</li>
        <li className="navbar-item">
          <button type="button" className="navbar-button">
            Resume
          </button>
        </li>
      </ul>
      {/* Small device menu */}
      <div className="popup-wrapper">
        <Popup
          trigger={(open) => (
            <button className="hamburger_close-button" type="button">
              {open ? (
                <IoCloseOutline className="close-icon" />
              ) : (
                <RxHamburgerMenu className="hamburger-icon" />
              )}
            </button>
          )}
          modal
          closeOnDocumentClick
          overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
          contentStyle={{
            padding: 0,
            border: "none",
            background: "transparent",
          }}
        >
          {(close) => (
            <div className="drawer-popup">
              <button className="drawer-close-btn" onClick={close}>
                <IoCloseOutline className="close-icon" />
              </button>
              <ul className="drawer-menu-list">
                <li className="drawer-item">About</li>
                <li className="drawer-item">Projects</li>
                <li className="drawer-item">Contact</li>
                <li className="drawer-item">
                  <button type="button" className="drawer-button">
                    Resume
                  </button>
                </li>
              </ul>
              <div className="drawer-footer">
                <div className="drawer-footer-line"></div>
                <p>© 2025 My Portfolio | Sudhakar</p>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  );
};

export default Navbar;
