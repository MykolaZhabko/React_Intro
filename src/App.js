import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wraper">
      <header className="header">
        <img src="images/fox.png" alt="" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="content">
        <div className="card">
          <img src="images/img-3.jpg" alt="" className="card-img" />
        </div>
        <div className="ava-dis">ava + discription</div>
        <div className="my-post">
          My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
