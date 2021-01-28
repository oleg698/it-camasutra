// import logo from './logo.svg';
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          className="logo"
          id="air"
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          alt="jhgjhg"
        />
      </header>
      <content className="content" id="contentId">
        content!!
      </content>

      <nav className="nav">
        <div>Profile</div>
        <div>Messages</div>
        <div>Main content</div>
      </nav>
    </div>
  );
};

export { App };
