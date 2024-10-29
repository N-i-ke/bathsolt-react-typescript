// src/components/Main.tsx
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

const Salt: React.FC = () => {
  return (
    <>
<section className="salt">
  <div className="salt__inner">
    <div className="box">
      <div className="box__inner">
        <div className="title">
          <img className="block" src={require('../img/c02_title.png')} alt="" />
          <img className="none" src={require('../img/c02_title_sp.png')} alt="" />
        </div>
        <div className="title__bottom">
          <img className="block" src={require('../img/c02_img1.png')} alt="" />
          <img className="none" src={require('../img/c02_title_sp.png')} alt="" />
        </div>
        <div className="link">
          <a href="/">
            <img src={require('../img/c02_bnr.png')} alt="" />
          </a>
        </div>
        <div className="bottom__box">
          <div className="yuzu">
            <figure>
              <img src={require('../img/c02_yuzu.png')} alt="" />
            </figure>
            <div className="frame">
              <ul>
                <li>血行促進</li>
                <li>冷え症予防</li>
                <li>むくみ予防</li>
              </ul>
              <div className="link">
                <a href="/">
                  <img src={require('../img/c02_btn.png')} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="ginger">
            <figure>
              <img src={require('../img/c02_ginger.png')} alt="" />
            </figure>
            <div className="frame">
              <ul>
                <li>血行促進</li>
                <li>発汗作用</li>
                <li>鎮痛作用</li>
              </ul>
              <div className="link">
                <a href="/">
                  <img src={require('../img/c02_btn.png')} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Salt;
