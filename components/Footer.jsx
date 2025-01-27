import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>
        © {currentYear} MBT Stores. <span>All rights reserved</span>
      </p>
      <p className="icons">
        <Link
          href="https://www.instagram.com/mbt_stores/"
          legacyBehavior={false}
          target="_blank"
        >
          <AiFillInstagram />
        </Link>{" "}
        <Link
          href="https://www.twitter.com/mbt_stores/"
          legacyBehavior={false}
          target="_blank"
        >
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
