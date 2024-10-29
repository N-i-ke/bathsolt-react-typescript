// src/components/Main.tsx
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

const Main: React.FC = () => {
  return (
    <>
      {/* メインセクション */}
      <section className="main">
        <div className="main__inner">
          <div className="logo">
            <img src={require('../img/logo.png')} alt="ロゴ" />
          </div>
          <div className="title">
            <img src={require('../img/main_title.png')} alt="メインタイトル" />
            <img className="none" src="img/main_title_sp.png" alt="メインタイトルSP" />
          </div>
          <div className="sub__title">
            <img src="img/main_pdtitle.png" alt="サブタイトル" />
          </div>
        </div>
      </section>

      {/* メインボトムセクション */}
      <section className="main__bottom">
        <div className="main__bottom__inner">
          <div className="title">
            <img src="img/c01_title.png" alt="タイトル" />
          </div>
          <div className="title__text">
            <p className="text">
              こだわりの天然岩塩にユズとジンジャーの天然植物成分を配合したバスソルト。<br />
              爽やかでほろ苦いユズに、ピリッとスパイシーなジンジャーをブレンドした香りで、<br />
              全身にぬくもり巡る発汗バスタイムを。<br />
            </p>
            <div className="price">
              850g : 2,400円 (税抜) 50g 150円 (税抜)
            </div>
          </div>

          <button className="green">
            <a href="">ご購入はこちら</a>
          </button>
          <button className="orange">
            <a href="">詳しく見る</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;
