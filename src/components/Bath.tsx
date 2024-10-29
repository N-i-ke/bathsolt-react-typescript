// src/components/Main.tsx
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

const Bath: React.FC = () => {
  return (
    <>
<section className="bath">
  <div className="bath__inner">
    <div className="title">
      <img src={require('../img/c03_title.png')} alt="" />
    </div>
    <div className="top__img">
      <div className="left">
        <img src={require('../img/c03_bubble.png')} alt="" />
      </div>
      <div className="right">
        <img src={require('../img/c03_img1.png')} alt="" />
      </div>
    </div>
    <div className="bottom__img">
      <div className="left">
        <img src={require('../img/c03_catch.png')} alt="" />
        <img className="none" src={require('../img/c03_catch_sp.png')} alt="" />
      </div>
      <div className="right">
        <img src={require('../img/c03_img2.png')} alt="" />
      </div>
    </div>
    <button className="btn">
      <a href="/">商品ページ</a>
    </button>
  </div>
</section>

    </>
  );
};

export default Bath;
