import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { SlLogin } from "react-icons/sl";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="navbar-brand">
            <div className="logo">
              <FiMenu />
            </div>
            <div className="text">
              good<strong>reads</strong>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <FaUserAstronaut />
              <BsFillJournalBookmarkFill />
              <BiMessageAltDetail />
            </div>
            <div className="navbar-end">
              <SlLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
