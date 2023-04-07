import { useState, useRef } from "react";
import NavBarStyle from "./NavBar.module.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import Icon from "../Icon";
import WebName from "../WebName";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const SideBar = ({ toggle, handleToggle }) => {
  const categories = ["Toy", "Phones"];
  return (
    <div
      className={toggle ? NavBarStyle.overlay : NavBarStyle.not_overlay}
      onClick={handleToggle}
    >
      <div
        className={toggle ? NavBarStyle.sidebar : NavBarStyle.hide}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={NavBarStyle.sidebar_header}>
          <WebName />
          <Icon Icon={AiOutlineClose} onClick={handleToggle} />
        </div>
        <div className={NavBarStyle.sidebar_content}>
          <h2>Categories</h2>
          {categories.map((category) => {
            return <p key={category}>{category}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

const Modal = ({ toggleProfile, handleToggleProfile }) => {
  const navigate = useNavigate();
  return (
    <div
      className={toggleProfile ? NavBarStyle.overlay : NavBarStyle.not_overlay}
      onClick={handleToggleProfile}
    >
      <div
        className={NavBarStyle.profile_modal}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          textContent={"Sign in"}
          isPrimary={true}
          onClick={() => {
            navigate("/login");
          }}
        />
        <span>
          New customer ?{" "}
          <Link to="/signup" style={{ color: "var(--primary)" }}>
            Start here
          </Link>
        </span>
      </div>
    </div>
  );
};

const SearchBar = ({ toggleSearch, handleToggle }) => {
  const searchBarRef = useRef();

  return (
    <div
      className={
        toggleSearch
          ? NavBarStyle.searchbar_container_show
          : NavBarStyle.searchbar_container
      }
    >
      <Icon Icon={AiOutlineClose} onClick={handleToggle} />
      <div className={NavBarStyle.searchbar} ref={searchBarRef}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => {
            searchBarRef.current.style.borderColor = "var(--primary)";
          }}
          onBlur={() => {
            searchBarRef.current.style.borderColor = "var(--black)";
          }}
        />
        <Icon Icon={AiOutlineSearch} />
      </div>
    </div>
  );
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const handleToggleProfile = () => {
    setToggleProfile(!toggleProfile);
  };

  return (
    <>
      <nav className={NavBarStyle.navbar}>
        {toggleSearch ? (
          <SearchBar
            toggleSearch={toggleSearch}
            handleToggle={handleToggleSearch}
          />
        ) : (
          <>
            <div className={NavBarStyle.navbar_head}>
              <Icon Icon={AiOutlineMenu} onClick={handleToggle} />
              <WebName />
            </div>
            <SearchBar handleToggle={handleToggleSearch} />
            <div className={NavBarStyle.navbar_action}>
              <Icon className={NavBarStyle.search_icon} Icon={AiOutlineSearch} onClick={handleToggleSearch} />
              <Icon
                Icon={AiOutlineShopping}
                onClick={() => navigate("/cart")}
              />
              <Icon Icon={AiOutlineUser} onClick={handleToggleProfile} />
            </div>
            <SideBar toggle={toggle} handleToggle={handleToggle} />
          </>
        )}
      </nav>
      {toggleProfile && (
        <Modal
          toggleProfile={toggleProfile}
          handleToggleProfile={handleToggleProfile}
        />
      )}
    </>
  );
};

export default NavBar;
