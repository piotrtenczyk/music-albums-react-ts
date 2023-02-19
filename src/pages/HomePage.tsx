import React from "react";
import Album from "../common/musicAlbum/Album";

const homePageParagraphStyle = {
  fontSize: "18px",
  fontFamily: "'Courier New', monospace",
  margin: "30px",
  display: "inline-block",
};

function HomePage() {
  const description = {
    title: "tytul",
    artist: "zenekMartyniuk",
    price: 0,
  };

  const coverImageFromMichal =
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Zenon_Martyniuk_%28member_of_Polish_band_Akcent%29_2018.jpg";

  const coverImageFromGrzegorz =
    "https://s3.viva.pl/newsy/zenek-martyniuk-jamnik-484850-GALLERY_BIG.jpg";
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
      <p style={homePageParagraphStyle}>
        Michał P. podał nam taki ciekawy album:
        <Album
          number={1}
          coverImageUrl={coverImageFromMichal}
          description={description}
        />
        Druga wersja:
        <Album
          number={2}
          coverImageUrl={coverImageFromGrzegorz}
          description={description}
        />
      </p>
    </div>
  );
}

export default HomePage;
