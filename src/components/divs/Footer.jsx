import React from "react";
import "./Footer.css";

import {
  FaTwitter,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          title="linkTwitter"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Ranii_Montagna"
        >
          <FaTwitter />
        </a>
        <a
          title="linkInstagram"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/raniellimontagna/"
        >
          <FaInstagram />
        </a>
        <a
          title="linkFacebook"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ranielli.montagna/"
        >
          <FaFacebook />
        </a>
        <a
          title="linkDiscord"
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/invite/aaJCW28Svt/"
        >
          <FaDiscord />
        </a>
      </div>
      <p>© 2021 by Ranielli Montagna. All rights reserved.</p>
    </div>
  );
}

export default Footer;
