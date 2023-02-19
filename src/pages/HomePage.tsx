import React from "react";
import { HPP } from "../common/HomePageParagraph";
import Album from "../common/musicAlbum/Album";

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
      <HPP>
        Checkout out our music albums. These are the top albums on iTunes at the
        moment. If you like any of them, feel free to add them to a shopping
        cart.
      </HPP>
      <HPP>
        Also have a look at our hand picked favourites (we often run some good
        discounts on those).
      </HPP>
      <HPP>Michał P. podał nam taki ciekawy album:</HPP>
      <Album
        number={1}
        coverImageUrl={coverImageFromMichal}
        description={description}
      />
      <HPP>Druga wersja:</HPP>

      <Album
        number={2}
        coverImageUrl={coverImageFromGrzegorz}
        description={description}
      />
    </div>
  );
}

export default HomePage;
