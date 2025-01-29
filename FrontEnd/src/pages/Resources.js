import React from 'react';
import '../style/Resources.css'; // 引入新的 CSS 文件

const Resources = () => {
  return (
    <div className="resources-page">
      {/* 标题部分 */}

      <header className="header">
        <div className="background-image">
          <h1>最新推文</h1>
        </div>
      </header>

      {/* 推文板块 */}
      <section className="posts-section">
        <div className="post-card">
          <a
            href="https://mp.weixin.qq.com/s/UsHBRynm1NzoPvo6yrLMzw"
            target="_blank"
            rel="noopener noreferrer"
          >
            戏剧社新生招募
          </a>
        </div>
        <div className="post-card">
          <a
            href="https://mp.weixin.qq.com/s/vi5wlGKu9mEmgUBqZI5GzQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            华大乌托邦西雅图迎新会
          </a>
        </div>
        <div className="post-card">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            推文3
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;
