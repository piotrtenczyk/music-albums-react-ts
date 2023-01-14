import React from "react";

const homePageParagraphStyle = {
  fontSize: "18px",
  fontFamily: "'Courier New', monospace",
  margin: "30px",
  display: "inline-block",
};

function HomePage() {
  return (
    <div className="App">
      <p style={homePageParagraphStyle}>
        Checkout out our music albums. These are the top albums on iTunes at the
        moment. If you like any of them, feel free to add them to a shopping
        cart.
      </p>
      <p style={homePageParagraphStyle}>
        Also have a look at our hand picked favourites (we often run some good
        discounts on those).
      </p>
    </div>
  );
}

export default HomePage;
