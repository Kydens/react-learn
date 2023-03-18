import React, { Component } from "react";
import { Footer, Header } from "../../Components/Moleculs";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        {/* Header */}
        <div className="header">
          <Header />
        </div>

        <main>main content</main>

        <div className="footer">
          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
