import React from "react";
import FooterStyles from "./Footer.module.css";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { Link } from "react-router-dom";

const FooterLink = ({ linkContent, linkPath }) => {
  return (
    <li className={FooterStyles.item}>
      <Link to={linkPath}>{linkContent}</Link>
    </li>
  );
};

function Footer() {
  const links = [
    {
      linkContent: "Private Policy",
      linkPath: "/",
    },
    {
      linkContent: "Return Policy",
      linkPath: "/",
    },
    {
      linkContent: "Term of Services",
      linkPath: "/",
    },
    {
      linkContent: "FAQ",
      linkPath: "/",
    },
  ];
  return (
    <footer className={FooterStyles.footer}>
      <h2 className={FooterStyles.name}> About the shop</h2>
      <SlSocialFacebook size={40} className={FooterStyles.icon} />
      <SlSocialInstagram size={40} className={FooterStyles.icon} />
      <SlSocialTwitter size={40} className={FooterStyles.icon} />
      {links.map((link) => (
        <FooterLink
          key={link.linkContent}
          linkContent={link.linkContent}
          linkPath={link.linkPath}
        />
      ))}
    </footer>
  );
}

export default Footer;
