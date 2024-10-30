// src/components/Main.tsx
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

const Footer: React.FC = () => {
  return (
    <>
        <footer>
  <div className="footer__inner">
    <div className="top">
      <div className="top__inner">
        <ul>
          <li>
            <a href="/">
              <img src={require('../img/bnr_facebook.png')} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={require('../img/bnr_instagram.png')} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={require('../img/bnr_twitter.png')} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={require('../img/bnr_kneipp.png')} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="bottom">
      <div className="bottom__inner">
        <a href="/">プライバシーポリシー</a>
        <div className="bottom">
          Copyright © 2024 Kneipp Japan. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
