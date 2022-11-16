import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { SiGmail, SiLeetcode } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/akash136/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Akash1362000/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/shrivastava136/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://instagram.com/akash_shrivastava_136/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="mailto:akash.shrivastava136@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail />
      </a>
      <a
        href="https://leetcode.com/Akash136/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
