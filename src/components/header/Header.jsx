import React from "react";
import Cta from "./Cta";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import { BsArrowDownShort } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hi,</h1>
        <h1>
          I'm <span>Devjan</span>,
        </h1>
        <h1>front-end developer</h1>

        <Cta />
        <HeaderSocial />

        <div className="scroll__down">
          scroll down
          <BsArrowDownShort className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
