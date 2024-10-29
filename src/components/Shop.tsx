// src/components/Main.tsx
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

const Shop: React.FC = () => {
  return (
    <>
      <section className="shop">
  <div className="shop__inner">
    <div className="box">
      <div className="box__inner">
        <div className="title">
          <img src={require('../img/shop_title.png')}  alt="" />
          <img src={require('../img/shop_title_sp.png')}  alt="" className="none" />
        </div>
        <div className="sub__title">主な取り扱い店</div>
        <div className="text">
          ココカラファイン (セイジョー、ドラッグセガミ、ジップドラッグ、
          LIFORT、クスリのコダマ等)、
          <br />
          トモズなどのドラッグストアや、バラエティショップ。
        </div>
        <div className="add">
          ※一部の店舗でお取り扱いがない場合がございます。
        </div>
        <div className="btn">
          <a href="">
            <img src={require('../img/shop_btn.png')}  alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Shop;
