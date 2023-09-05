import React from "react";
import "../style/style.css";

export default function Home() {
  return (
    <body>
      <header className="headerContainer">
        <div className="user">This is where we put welcome users</div>
        <div className="profile">profile image</div>
      </header>
      <div className="summaryContainer">
        <div className="summaryChildren">This will hold the Summary</div>
      </div>
      <div className="activeContainer">
        <div className="activeChildren">
          This will hold the active activities
          <button>This is Edit</button>
          <button>This is Delete Button</button>
        </div>
      </div>
      <footer>
        This will hold the button
        <div className="buttonContainer">
          <button>Home</button>
          <button>Add activities</button>
          <button>System</button>
        </div>
      </footer>
    </body>
  );
}
